import { hdvDatamapper } from "../../model/index.js";
import { genericDatamapper } from "../../model/index.js";
import { screenService } from "../../service/screenService.js";

const hdvController = {
  /**
   * Get and return all the hdv items
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAll: async (req, res, next) => {
    const { error, result } = await hdvDatamapper.findAll();

    if (error) {
      console.log(error);
      next(error);
    } else {
      result.forEach((element) => {
        for (const key in element) {
          if (element[key] === null) {
            delete element[key];
          }
        }
      });
      res.json(result);
    }
  },

  /**
   * Get and return only the hdv item selected by its id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findOne: async (req, res, next) => {
    const { error, result } = await hdvDatamapper.findOne(req.params.id);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },
  /**
   * Get and return only the hdv item related to the given generic item
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAllByGeneric: async (req, res, next) => {
    const { error, result } = await hdvDatamapper.findAllByGeneric(
      req.params.id
    );
    if (error) {
      next(error);
    } else {
      result.forEach((element) => {
        for (const key in element) {
          if (element[key] === null) {
            delete element[key];
          }
        }
      });
      res.json(result);
    }
  },
  /**
   * Get and return only the hdv item related to the given generic item
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  handleFilter: async (req, res, next) => {
    const { error, result } = await hdvDatamapper.filterItems(req.body);

    if (error) {
      next(error);
    } else {
      result.forEach((element) => {
        for (const key in element) {
          if (element[key] === null) {
            delete element[key];
          }
        }
      });
      res.json(result);
    }
  },
  /**
   * Get and return only the hdv items related to the given user
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAllByUser: async (req, res, next) => {
    const { error, result } = await hdvDatamapper.findAllByUser(req.params.id);

    if (error) {
      next(error);
    } else {
      result.forEach((element) => {
        for (const key in element) {
          if (element[key] === null) {
            delete element[key];
          }
        }
      });
      res.json(result);
    }
  },

  /**
   * Add a hdv item to the database and return it
   * @param {*} req
   * @param {*} res
   */
  add: async (req, res, next) => {
    /* debug(req.body); */
    const { error, result } = await hdvDatamapper.add(req.body);

    if (error) {
      console.log(error);
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Modify a hdv item in the database
   * @param {*} req
   * @param {*} res
   */
  modify: async (req, res, next) => {
    const hdv = req.body;
    hdv.id = req.params.id;

    const { error, result } = await hdvDatamapper.modify(hdv);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Delete a hdv item
   * @param {*} req
   * @param {*} res
   */
  deleteOne: async (req, res, next) => {
    const { error, result } = await hdvDatamapper.deleteOne(req.params.id);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  handleScreen: async (req, res) => {
    const urlArray = [];
    let i = 0;

    req.files.forEach((file) => urlArray.push(file.path));

    ///Si il n'y a qu'un seul screen on ne rentre pas dans la loop for
    if (urlArray.length === 1) {
      let carac = await screenService.screenCarac2(urlArray[i]);
      carac.price = req.body.price;
      carac.serveur = req.body.serveur;
      let name = await screenService.screenName2(urlArray[i]);

      let itemTargeted = (await genericDatamapper.findGenericByName(name.name))
        .result;

      let itemToAdd = {
        generic_item_id: itemTargeted.id,
        ...carac,
        vendeur_id: req.body.vendeur_id,
      };

      const { error, result } = await hdvDatamapper.add(
        JSON.stringify(itemToAdd)
      );
      console.log(error);
    } else {
      /// Ici on est dans le cas ou on a plus d'un screen
      for (let i = 0; i < urlArray.length; i++) {
        ///Screen du premier item

        let carac = await screenService.screenCarac2(urlArray[i]);

        carac.price = req.body.price;
        carac.serveur = req.body.serveur;
        let name = await screenService.screenName2(urlArray[i]);

        let itemTargeted = (
          await genericDatamapper.findGenericByName(name.name)
        ).result;

        /// Screen du second item

        if (i <= urlArray.length - 2) {
          let caracNext = await screenService.screenCarac2(urlArray[i + 1]);
          carac.price = req.body.price;
          carac.serveur = req.body.serveur;
          let nameNext = await screenService.screenName2(urlArray[i + 1]);
          let itemTargetedNext = (
            await genericDatamapper.findGenericByName(name.name)
          ).result;

          /// Check Conditions pour savoir si premier et second screen appartiennent au même item. On check d'abord les noms puis les caracs avec un counter si nb de carac identiques supérieur à 5 on part du principe que c'est les mêmes

          if (name.name == nameNext.name) {
            let counter = 0;

            for (const key in carac) {
              if (carac[key] === caracNext[key]) {
                counter++;
              }
            }
            if (counter >= 5) {
              //Si les items présentent plus de 5 carac communes alors ils sont identiques, on associe leurs caracs et on envoie ne BDD

              carac = { ...carac, ...caracNext };

              let itemToAdd = {
                generic_item_id: itemTargeted.id,
                ...carac,
                vendeur_id: req.body.vendeur_id,
              };

              await hdvDatamapper.add(JSON.stringify(itemToAdd));

              // étant donné qu'on insert deux screens en même temps j'augmente i pour qu'il n'y ait pas de doublon
              i++;
            } else {
              //Sinon, les deux items ont le même nom mais ne correspondent pas donc on insère uniquement le premier item et on compare le second avec le troisième, etc

              let itemToAdd = {
                generic_item_id: itemTargeted.id,
                ...carac,
                vendeur_id: req.body.vendeur_id,
              };

              await hdvDatamapper.add(JSON.stringify(itemToAdd));
            }
          } else {
            //Ici, on est dans le cas ou les noms des items sont différents.
            if (i === 0) {
              // Si l'item est le premier item de l'array et son nom n'est pas identique au second cela veut dire qu'on a un seul screen pour cet item donc on peut l'insérer dans la BDD

              let itemToAdd = {
                generic_item_id: itemTargeted.id,
                ...carac,
                vendeur_id: req.body.vendeur_id,
              };

              await hdvDatamapper.add(JSON.stringify(itemToAdd));
            } else if (i > 0) {
              // Si l'item n'est pas le premier de l'array et son nom n'est pas identique au suivant cela veut dire que théoriquement on peut l'insérer. Cependant, il se peut, étant donné que l'on fait des pas de 1 (i++) que cet item corresponde à celui d'avant et on risque donc de l'insérer en doublon. On va donc checker qu'il est différent du précédent pour ne pas intégrer
              let nameBefore = await screenService.screenName2(urlArray[i - 1]);
              if (name !== nameBefore) {
                let itemToAdd = {
                  generic_item_id: itemTargeted.id,
                  ...carac,
                  vendeur_id: req.body.vendeur_id,
                };

                await hdvDatamapper.add(JSON.stringify(itemToAdd));
              }
            }
          }
        } else if (i < urlArray.length) {
          let nameBefore = await screenService.screenName2(urlArray[i - 1]);
          if (name !== nameBefore) {
            let itemToAdd = {
              generic_item_id: itemTargeted.id,
              ...carac,
              vendeur_id: req.body.vendeur_id,
            };

            await hdvDatamapper.add(JSON.stringify(itemToAdd));
          }
        }
      }
    }
    /* screenService.emptyFolder(
      "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/uploads"
    ); */
    screenService.emptyFolder("../../../uploads");
    res.json("Item inserted succesfully");
  },
};

export default hdvController;

import { favDatamapper } from "../../model/index.js";

const favController = {
  /**
   * Get and return all the favoriss
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAll: async (req, res, next) => {
    
    const { error, result } = await favDatamapper.findAll();
    
    if (error) {
      next(error);
    } else {
      result.forEach(element=>{for (const key in element){
        if (element[key] === null) {
          delete element[key];
        }
      }})
      res.json(result);
    }
  },

  /**
   * Get and return only the fav selected by its id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findOne: async (req, res,next) => {
    const { error, result } = await favDatamapper.findOne(req.params.id);

    if (error) {
      next(error);
    } else {
    
      res.json(result);
    }
  },
  /**
   * Get and return all the fav of a user 
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAllByUser: async (req, res,next) => {
    const { error, result } = await favDatamapper.findAllByUser(req.params.id);

    if (error) {
      next(error);
    } else {
      result.forEach(element=>{for (const key in element){
        if (element[key] === null) {
          delete element[key];
        }
      }})
      res.json(result);
    }
  },
  

  /**
   * Add a favoris to the database and return it
   * @param {*} req
   * @param {*} res
   */
  add: async (req, res,next) => {
    /* debug(req.body); */
    const { error, result } = await favDatamapper.add(req.body);

    if (error) {
      console.log(error);
      next(error);
    } else {
      res.json(result);
    }
  },

  // /**
  //  * Modify a user in the database
  //  * @param {*} req
  //  * @param {*} res
  //  */
  // modify: async (req, res,next) => {
  //   const favoris = req.body;
  //   user.id = req.params.id;

  //   const { error, result } = await favDatamapper.modify(favoris);

  //   if (error) {
  //     next(error);
  //   } else {
  //     res.json(result);
  //   }
  // },

  /**
   * Delete a favoris
   * @param {*} req
   * @param {*} res
   */
  deleteOne: async (req, res,next) => {
    const { error, result } = await favDatamapper.deleteOne(req.params.id);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },
};

export default favController;

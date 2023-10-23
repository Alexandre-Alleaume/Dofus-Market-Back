import { genericDatamapper } from "../../model/index.js";

const genericController = {
  /**
   * Get and return all the generic items
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAll: async (req, res, next) => {
    const { error, result } = await genericDatamapper.findAll();
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
   * Get and return only the generic item selected by its id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findOne: async (req, res, next) => {
    const { error, result } = await genericDatamapper.findOne(req.params.id);
    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Add a generic item to the database and return it
   * @param {*} req
   * @param {*} res
   */
  add: async (req, res, next) => {
    const { error, result } = await genericDatamapper.add(req.body);

    if (error) {
      console.log(error);
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Modify a generic item in the database
   * @param {*} req
   * @param {*} res
   */
  modify: async (req, res, next) => {
    const generic = req.body;
    generic.id = req.params.id;

    const { error, result } = await genericDatamapper.modify(generic);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Delete one generic item
   * @param {*} req
   * @param {*} res
   */
  deleteOne: async (req, res, next) => {
    const { error, result } = await genericDatamapper.deleteOne(req.params.id);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },
};

export default genericController;

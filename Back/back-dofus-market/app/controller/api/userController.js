import { userDatamapper } from "../../model/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 10;

const userController = {
  /**
   * Get and return all the users
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findAll: async (req, res, next) => {
    const { error, result } = await userDatamapper.findAll();

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Get and return only the user selected by its id
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findOne: async (req, res, next) => {
    const { error, result } = await userDatamapper.findOne(req.params.id);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },
  /**
   * Get and return only the user selected by its pseudo
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  findOneByPseudo: async (req, res, next) => {
    const { error, result } = await userDatamapper.findOneByPseudo(
      req.params.name
    );

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },
  /**
   * Add a user to the database and return it
   * @param {*} req
   * @param {*} res
   */
  add: async (req, res, next) => {
    /* debug(req.body); */

    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    const { error, result } = await userDatamapper.add(req.body);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Modify a user in the database
   * @param {*} req
   * @param {*} res
   */
  modify: async (req, res, next) => {
    const user = req.body;
    user.id = req.params.id;

    const { error, result } = await userDatamapper.modify(user);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },

  /**
   * Delete a user
   * @param {*} req
   * @param {*} res
   */
  deleteOne: async (req, res, next) => {
    const { error, result } = await userDatamapper.deleteOne(req.params.id);

    if (error) {
      next(error);
    } else {
      res.json(result);
    }
  },
  async login(req, res, next) {
    const { error, result } = await userDatamapper.checkUser(req.body);

    if (error) {
      // si j'ai une erreur => next(error)
      res.json("Pseudo ou mot de passe incorrect");
    } else {
      // si tout va bien
      if (result.id) {
        // j'enregistre les informations de l'utilisateur dans la session
        req.session.user = result;

        delete req.session.user.password;

        // je génère un token à partir des informations de mon utilisateur et du secret
        const token = jwt.sign(
          { user: req.session.user },
          process.env.JWT_SECRET
        );

        // je retourne le token
        res.json({ token: token });
      } else {
        // le couple email/mot de passe est incorrect
        res.json("pseudo ou mot de passe incorrect");
      }
    }
  },
};

export default userController;

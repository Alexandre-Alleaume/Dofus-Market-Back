import pool from "../service/dbPool.js";

/* import debug from "debug"; */
import APIError from "../service/APIError.js";

import bcrypt from "bcrypt";

/* const logger = debug("model"); */

/********************************/
/* User Datamapper */
/********************************/

const userDatamapper = {
  async findAll() {
    // je prépare ma requête SQL

    const sqlQuery = `
SELECT * FROM administration.get_all_user();
`;

    let result;
    let error;

    try {
      // j'envoie ma requête à ma BDD

      const response = await pool.query(sqlQuery);
      // je place la réponse dans result
      result = response.rows;

      /* debug(result); */
    } catch (err) {
      // je crèe une erreur 500
      console.log(err);
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async findOne(id) {
    // je prépare ma requête SQL
    const sqlQuery = `
        SELECT * FROM administration.get_user($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [id];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);
      result = response.rows[0];
      // je teste pour savoir si au moins une ligne a été retournée
      if (response.rows.length == 0) {
        // aucune catégorie n'a été trouvée
        error = new APIError("Aucun user n'a été trouvée", 404);
      } else {
        // je place la réponse dans result
        result = response.rows[0];
      }
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async findOneByPseudo(pseudo) {
    // je prépare ma requête SQL
    const sqlQuery = `
        SELECT * FROM administration.get_user_by_pseudo($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [pseudo];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
      result = response.rows[0];
    } catch (err) {
      // je crèe une erreur 500
      console.log(err);
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async findOneByEmail(email) {
    // je prépare ma requête SQL
    const sqlQuery = `
        SELECT * FROM administration.get_user_by_email($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [email];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
      result = response.rows[0];
    } catch (err) {
      // je crèe une erreur 500
      console.log(err);
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async add(obj) {
    // je prépare ma requête SQL
    const sqlQuery = `SELECT * FROM administration.insert_user($1);`;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [obj];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
      result = response.rows[0];
    } catch (err) {
      /* debug(err); */
      // je crèe une erreur 500
      console.log(err);
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async modify(user) {
    // je prépare ma requête SQL
    const sqlQuery = `
SELECT * FROM administration.update_user($1);
`;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [user];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
      result = response.rows[0];
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async deleteOne(id) {
    // je prépare ma requête SQL
    const sqlQuery = `
    SELECT administration.delete_user($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [id];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);
      /* debug(response); */
      // je place la réponse dans result
      result = !!response.rows[0].delete_user;

      if (!result) {
        error = new APIError("Aucun user n'a été supprimée", 500);
      }
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async checkUser(user) {
    // je prépare ma requête SQL

    const sqlQuery = `
        SELECT * FROM administration.check_user($1);
    `;
    const values = [user];

    let result;
    let error;

    try {
      // j'envoie ma requête à ma BDD

      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
      result = response.rows[0];

      const match = await bcrypt.compare(user.password, result.password);
      if (!match) {
        error = new APIError("Mot de passe incorrect", 500);
      }
    } catch (err) {
      /* debug(err); */
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async saveDiscordToken(obj) {
    // je prépare ma requête SQL

    const sqlQuery = `
SELECT * FROM administration.update_user($1);
`;

    const values = [obj];

    let result;
    let error;

    try {
      // j'envoie ma requête à ma BDD

      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async updateDiscord(obj) {
    // je prépare ma requête SQL

    const sqlQuery = `
    SELECT * FROM administration.update_user($1);
    `;

    const values = [obj];

    let result;
    let error;

    try {
      // j'envoie ma requête à ma BDD

      const response = await pool.query(sqlQuery, values);

      // je place la réponse dans result
    } catch (err) {
      /* debug(err); */
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async updateResetTimer(obj) {
    // je prépare ma requête SQL

    const sqlQuery = `
    SELECT * FROM administration.update_user($1);
    `;

    const values = [obj];

    let result;
    let error;

    try {
      // j'envoie ma requête à ma BDD

      const response = await pool.query(sqlQuery, values);
      result = response.rows[0];

      // je place la réponse dans result
    } catch (err) {
      /* debug(err); */
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
};

export default userDatamapper;

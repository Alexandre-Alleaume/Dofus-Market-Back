import pool from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/service/dbPool.js";
/* import debug from "debug"; */
import APIError from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/service/APIError.js";

/* const logger = debug("model"); */

/********************************/
/* Hdv Datamapper */
/********************************/

const hdvDatamapper = {
  async findAll() {
    // je prépare ma requête SQL

    const sqlQuery = `
SELECT * FROM web.get_all_hdv();
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
        SELECT * FROM web.get_hdv($1);
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
        error = new APIError("Aucune item n'a été trouvée", 404);
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
  async findAllByGeneric(id) {
    // je prépare ma requête SQL
    const sqlQuery = `
        SELECT * FROM web.get_hdv_by_generic($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [id];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);

      // je teste pour savoir si au moins une ligne a été retournée
      /*  if (response.rows.length == 0) {
        // aucune catégorie n'a été trouvée
        error = new APIError("Aucune catégorie n'a été trouvée", 404);
      } else {
        // je place la réponse dans result
        result = response.rows;
      } */
      result = response.rows;
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async findAllByUser(id) {
    // je prépare ma requête SQL
    const sqlQuery = `
        SELECT * FROM web.get_user_hdv($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [id];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);

      // je teste pour savoir si au moins une ligne a été retournée

      // je place la réponse dans result
      result = response.rows;
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async add(obj) {
    // je prépare ma requête SQL
    const sqlQuery = `SELECT * FROM web.insert_hdv($1);`;
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
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },

  async filterItems(obj) {
    // je prépare ma requête SQL

    const sqlQuery = `
SELECT * FROM web.filter_hdv($1);
`;

const values = [obj];

    let result;
    let error;

    try {
      // j'envoie ma requête à ma BDD

      const response = await pool.query(sqlQuery,values);
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

  async modify(hdvItem) {
    // je prépare ma requête SQL
    const sqlQuery = `
SELECT * FROM web.update_hdv($1);
`;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [hdvItem];

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
    SELECT web.delete_hdv($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [id];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);
      /* debug(response); */
      // je place la réponse dans result
      result = !!response.rows[0].delete_hdv;

      if (!result) {
        error = new APIError("Aucunn item n'a été supprimée", 500);
      }
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
};

export default hdvDatamapper;

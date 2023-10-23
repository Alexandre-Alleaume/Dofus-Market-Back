import pool from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/app/service/dbPool.js";
/* import debug from "debug"; */
import APIError from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/app/service/APIError.js";

/* const logger = debug("model"); */

/********************************/
/* Item Generic Datamapper          */
/********************************/

const genericDatamapper = {
  async findAll() {
    // je prépare ma requête SQL

    const sqlQuery = `
SELECT * FROM web.get_all_item_generic();
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
        SELECT * FROM web.get_item_generic(${id});
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    /*  const values = [id]; */

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery);

      result = response.rows[0];

      // je teste pour savoir si au moins une ligne a été retournée
      if (response.rows.length == 0) {
        // aucune catégorie n'a été trouvée
        error = new APIError("Aucun item n'a été trouvé", 404);
      } else {
        // je place la réponse dans result
        result = response.rows[0];
      }
    } catch (err) {
      // je crèe une erreur 500
      console.log(err);
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
  async findGenericByName(name) {
    // je prépare ma requête SQL
    const sqlQuery = `
        SELECT * FROM web.get_item_generic_by_name($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [name];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);
      result = response.rows[0];
      // je teste pour savoir si au moins une ligne a été retournée
      if (response.rows.length == 0) {
        // aucune catégorie n'a été trouvée
        error = new APIError("Aucun item n'a été trouvé avec ce nom", 404);
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

  async add(obj) {
    // je prépare ma requête SQL
    const sqlQuery = `SELECT * FROM web.insert_item_generic($1);`;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [obj];

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

  async modify(genericItem) {
    // je prépare ma requête SQL
    const sqlQuery = `
SELECT * FROM web.update_item_generic($1);
`;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [genericItem];

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
    SELECT web.delete_item_generic($1);
    `;
    // je place les valeurs dans un tableau pour utiliser le système de parameterized query (requête paramétrée)
    const values = [id];

    let result;
    let error;

    try {
      const response = await pool.query(sqlQuery, values);
      /* debug(response); */
      // je place la réponse dans result
      result = !!response.rows[0].delete_item_generic;

      if (!result) {
        error = new APIError("Aucun item n'a été supprimé", 500);
      }
    } catch (err) {
      // je crèe une erreur 500
      error = new APIError("Erreur interne au serveur", 500, err);
    }

    // je retourne le résultat et l'erreur éventuelle
    return { error, result };
  },
};

export default genericDatamapper;

// Déclaration du routeur "favoris"
// sous-entendu, mon URL est préfixée par /favoris

import express from "express";
import { favController } from "../../controller/api/index.js";
import { securityService } from "../../service/checkJwt.js";
/* import { favController } from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/app/controller/api/index.js"; */

const router = express.Router();

// Import du service de validation
// const validationService = require("../../service/validation/validationService");

/**
 * GET /api/favoris
 * @summary Get all favoris
 * @tags favoris
 * @return {[favoris]} 200 - success response - application/json
 */
router.get("/", favController.findAll);

/**
 * GET /api/favoris/{id}
 * @summary Get one favoris
 * @tags favoris
 * @param {number} id.path.required - favoris identifier
 * @return {favoris} 200 - success response - application/json
 
 */
router.get("/:id(\\d+)", favController.findOne);

/**
 * GET /api/favoris/user/{id}
 * @summary Get all the fav of a user
 * @tags favoris
 * @param {number} id.path.required - favoris identifier
 * @return {favoris} 200 - success response - application/json
 
 */
router.get("/user/:id(\\d+)", favController.findAllByUser);

/**
 * POST /api/favoris
 * @summary Create a favoris
 * @tags favoris
 * @param {InputFavoris} request.body.required - favoris info
 * @return {favoris} 200 - success response - application/json
 
 */
router.post("/", securityService.checkJwt, favController.add);

// /**
//  * PATCH /api/favoris/{id}
//  * @summary Update one favoris
//  * @tags favoris
//  * @param {number} id.path.required - favoris identifier
//  * @param {favorisInput} request.body.required - fav info
//  * @return {favoris} 200 - success response - application/json
//  */
// router.patch("/:id(\\d+)", favController.modify);

/**
 * DELETE /api/favoris/{id}
 * @summary Delete one favoris
 * @tags favoris
 * @param {number} id.path.required - favoris identifier
 * @return {favoris} 200 - success response - application/json

 */
router.delete("/:id(\\d+)", securityService.checkJwt, favController.deleteOne);

export default router;

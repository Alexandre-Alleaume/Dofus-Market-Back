/* const checkRole = require("../../service/checkUserRole"); */

// Déclaration du routeur "generic"
// sous-entendu, mon URL est préfixée par /generic

//Apart from the find all and the find one, all the others routes are exclusively for admin user and will be rarely use. They are used to modify, delete or add items to the generic list. However, in  the last few years only 6 items have been added to the game that's why those routes would be rarely used. But I create them in case there are errors in the charcteristics of the items already in the database so admin can modify them. Hence, I should create an admin interface for this but it's not a priority because the modification can be directly done in pgAdmin.

import express from "express";
import { genericController } from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/controller/api/index.js";

const router = express.Router();

// Import du service de validation
// const validationService = require("../../service/validation/validationService");

/**
 * GET /api/generic
 * @summary Get all generic items
 * @tags generic
 * @return {[generic]} 200 - success response - application/json
 */
router.get("/", genericController.findAll);

/**
 * GET /api/generic/{id}
 * @summary Get one generic item
 * @tags generic
 * @param {number} id.path.required - generic item identifier
 * @return {generic} 200 - success response - application/json
 
 */
router.get("/:id(\\d+)", genericController.findOne);

/**
 * POST /api/generic
 * @summary Create a generic item
 * @tags generic
 * @param {Inputgeneric} request.body.required - generic info
 * @return {generic} 200 - success response - application/json
 
 */
router.post("/", genericController.add);

/**
 * PATCH /api/generic/{id}
 * @summary Update one generic item
 * @tags generic
 * @param {number} id.path.required - generic item identifier
 * @param {Inputticket} request.body.required - generic item info
 * @return {generic} 200 - success response - application/json
 */
router.patch("/:id(\\d+)", genericController.modify);

/**
 * DELETE /api/generic/{id}
 * @summary Delete one generic item
 * @tags generic
 * @param {number} id.path.required - generic item identifier
 * @return {generic} 200 - success response - application/json

 */
router.delete("/:id(\\d+)", genericController.deleteOne);

export default router

// Déclaration du routeur "hdv"
// sous-entendu, mon URL est préfixée par /hdv

import express from "express";
import { hdvController } from "../../controller/api/index.js";
import { securityService } from "../../service/checkJwt.js";
/* import { hdvController } from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/app/controller/api/index.js"; */
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

// Import du service de validation
// const validationService = require("../../service/validation/validationService");

/**
 * GET /api/hdv
 * @summary Get all items in hdv
 * @tags hdv
 * @return {[hdv]} 200 - success response - application/json
 */
router.get("/", hdvController.findAll);

/**
 * GET /api/hdv/{id}
 * @summary Get one hdv item
 * @tags hdv
 * @param {number} id.path.required - hdv item identifier
 * @return {hdv} 200 - success response - application/json
 
 */
router.get("/:id(\\d+)", hdvController.findOne);

/**
 * GET /api/hdv/generic/{id}
 * @summary Get all hdv item by the id of the generic item
 * @tags hdv
 * @param {number} id.path.required - hdv item identifier
 * @return {hdv} 200 - success response - application/json
 
 */
router.get("/generic/:id(\\d+)", hdvController.findAllByGeneric);

/**
 * GET /api/hdv/vendeur/{id}
 * @summary Get hdv by user
 * @tags hdv
 * @param {number} id.path.required - user identifier
 * @return {hdv} 200 - success response - application/json
 
 */
router.get("/vendeur/:id(\\d+)", hdvController.findAllByUser);

/**
 * POST /api/hdv
 * @summary Create a hdv item
 * @tags hdv
 * @param {Inputhdv} request.body.required - hdv info
 * @return {hdv} 200 - success response - application/json
 
 */
router.post("/", securityService.checkJwt, hdvController.add);

/**
 * POST /api/hdv/screen
 * @summary Create a hdv item via a screenshot uploaded
 * @tags hdv
 * @param {Image File} request.body.required - hdv info
 * @return {hdv} 200 - success response - application/json
 
 */
router.post(
  "/screen",
  upload.array("files"),
  securityService.checkJwt,
  hdvController.handleScreen
);

/**
 * GET /api/hdv/filter
 * @summary Filter hdv items 
 * @tags hdv
 * @param {filters params} request.body.required - hdv info
 * @return {hdv} 200 - success response - application/json
 
 */
router.post("/filter", hdvController.handleFilter);

/**
 * PATCH /api/hdv/{id}
 * @summary Update one hdv item
 * @tags hdv
 * @param {number} id.path.required - hdv item identifier
 * @param {Inputticket} request.body.required - hdv item info
 * @return {hdv} 200 - success response - application/json
 */
router.patch("/:id(\\d+)", securityService.checkJwt, hdvController.modify);

/**
 * DELETE /api/hdv/{id}
 * @summary Delete one hdv item
 * @tags hdv
 * @param {number} id.path.required - hdv item identifier
 * @return {hdv} 200 - success response - application/json

 */
router.delete("/:id(\\d+)", securityService.checkJwt, hdvController.deleteOne);

export default router;

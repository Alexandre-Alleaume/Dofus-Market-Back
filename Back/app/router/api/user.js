// Déclaration du routeur "user"
// sous-entendu, mon URL est préfixée par /user

import express from "express";
import { userController } from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/controller/api/index.js";
import { discordService } from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/service/discordService.js";

const router = express.Router();

// Import du service de validation
// const validationService = require("../../service/validation/validationService");

/**
 * GET /api/user
 * @summary Get all users
 * @tags user
 * @return {[user]} 200 - success response - application/json
 */
router.get("/", userController.findAll);

/**
 * GET /api/user/{id}
 * @summary Get one user
 * @tags user
 * @param {number} id.path.required - user identifier
 * @return {user} 200 - success response - application/json
 
 */
router.get("/:id(\\d+)", userController.findOne);
/**
 * GET /api/user/pseudo/{pseudo}
 * @summary Get one user by its pseudo
 * @tags user
 * @param {number} id.path.required - user identifier
 * @return {user} 200 - success response - application/json
 
 */
router.get(
  "/pseudo/:name",
  discordService.setDiscordPseudo,
  userController.findOneByPseudo
);
/**
 * POST /api/user/discord/auth
 * @summary Discord auth
 * @tags auth
 * 
 * @return {user} 200 - success response - application/json
 
 */
router.post("/discord/auth", discordService.registerDiscord);
/**
 * POST /api/user/discord/auth
 * @summary Discord auth
 * @tags auth
 * 
 * @return {user} 200 - success response - application/json
 
 */
router.post("/discord/update", discordService.updateDiscord);

/**
 * POST /api/user
 * @summary Create a user
 * @tags user
 * @param {InputUser} request.body.required - user info
 * @return {user} 200 - success response - application/json
 
 */
router.post("/", userController.add);

/**
 * PATCH /api/user/{id}
 * @summary Update one user
 * @tags user
 * @param {number} id.path.required - user identifier
 * @param {Inputuser} request.body.required - user info
 * @return {user} 200 - success response - application/json
 */
router.patch("/:id(\\d+)", userController.modify);

/**
 * DELETE /api/user/{id}
 * @summary Delete one user
 * @tags user
 * @param {number} id.path.required - user identifier
 * @return {user} 200 - success response - application/json

 */
router.delete("/:id(\\d+)", userController.deleteOne);

/**
 * LOGIN /user/login
 * @summary Log In
 * @tags user
 * @return {token} 200 - success response - application/json

 */
router.post("/login", userController.login);

export default router;

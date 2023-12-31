// Déclaration du routeur principal

import genericRouter from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/router/api/generic.js";
import hdvRouter from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/router/api/hdv.js";
import userRouter from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/router/api/user.js";
import favRouter from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/router/api/favoris.js";
import express from "express";
import { sessionService } from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/app/service/sessionService.js";

const mainRouter = express.Router();

mainRouter.use(sessionService.setLocals);

// Aiguillage pour les routes préfixées par generic
mainRouter.use("/generic", genericRouter);

// Aiguillage pour les routes préfixées par hdv
mainRouter.use("/hdv", hdvRouter);

// Aiguillage pour les routes préfixées par user
mainRouter.use("/user", userRouter);

// Aiguillage pour les routes préfixées par favoris
mainRouter.use("/favoris", favRouter);

export default mainRouter;

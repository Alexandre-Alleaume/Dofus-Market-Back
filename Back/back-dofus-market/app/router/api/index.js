// Déclaration du routeur principal

import genericRouter from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/app/router/api/generic.js";
import hdvRouter from "./hdv.js";
import userRouter from "./user.js";
import favRouter from "/Users/pumalicieux/Desktop/Dofus Market 2/Back/back-dofus-market/app/router/api/favoris.js";
import express from "express";

const mainRouter = express.Router();

// Aiguillage pour les routes préfixées par generic
mainRouter.use("/generic", genericRouter);

// Aiguillage pour les routes préfixées par hdv
mainRouter.use("/hdv", hdvRouter);

// Aiguillage pour les routes préfixées par user
mainRouter.use("/user", userRouter);

// Aiguillage pour les routes préfixées par favoris
mainRouter.use("/favoris", favRouter);

export default mainRouter;

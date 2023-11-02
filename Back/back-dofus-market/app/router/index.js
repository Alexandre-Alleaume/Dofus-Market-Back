import express from "express";
import apiRouter from "./api/index.js";

const router = express.Router();

// On préfixe les routers
router.use("/api", apiRouter);

// router.get("/", (req, res) => {
//   res.render("404");
// });

export default router;

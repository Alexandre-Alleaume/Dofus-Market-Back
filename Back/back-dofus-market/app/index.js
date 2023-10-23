import express from "express";
import cors from "cors";
import session from "express-session";
import router from "./router/index.js";

const app = express();

// Activation du format JSON
app.use(express.json());

// Mise en place des CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

// Configuration des sessions
app.use(
  session({
    secret: "2e5ed5b8e5db083da6a0affdfaf2aadc7dd04b7bf09f690dfa4b3c43156e7f3f",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 20 * 30,
    },
  })
);

// Liaison avec les routeurs
app.use(router);

export default app;

// Mise en place de la documentation
// require('./service/APIDoc')(app);
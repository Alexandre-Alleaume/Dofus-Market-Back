// import des informations du fichier .env
import dotenv from "dotenv";
dotenv.config();

// récupération de mon app Express
import app from "./app/index.js";

/* // VIEWS
app.set("view engine", "ejs");
app.set("views", "app/views"); */

// récupération du PORT configuré
const PORT = process.env.PORT || 3000;


// mise sur écoute de notre app sur le port
app.listen(PORT, () => {
  console.log(`Serveur accessible sur http://localhost:${PORT}`);
});

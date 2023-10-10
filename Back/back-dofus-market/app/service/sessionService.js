export const sessionService = {
  setLocals(req, res, next) {
    // je teste si mon user est connecté
    if (req.session.user) {
      // j'enregistre les infos dans les locals
      res.locals.user = req.session.user;
    }

    // je passe à la suite
    next();
  },
};

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const securityService = {
  checkJwt(req, res, next) {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    if (!token) {
      // No JWT provided, respond with a 401 Unauthorized status
      return res.status(401).json({ message: "Unauthorized: No JWT provided" });
    }

    // Verify the JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // JWT verification failed, respond with a 401 Unauthorized status
        return res.status(401).json({ message: "Unauthorized: Invalid JWT" });
      }

      // JWT is valid, you can access the payload in the 'decoded' object
      // For example, you can get the user's ID: const userId = decoded.id;

      // Continue with the request
      next();
    });
  },
};

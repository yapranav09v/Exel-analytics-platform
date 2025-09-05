// backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const verifyToken = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid Token" });
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Not authorized" });
      }
      req.user = decoded;
      next();
    });
  };
};

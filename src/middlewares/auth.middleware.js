import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export const authorizeUser = (req, res, next) => {
  const requestedUserId = parseInt(req.params.id);

  if (req.user.id !== requestedUserId) {
    return res.status(403).json({ error: "Forbidden: You can only access your own data" });
  }

  next(); 
};

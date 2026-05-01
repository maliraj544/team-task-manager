const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  console.log("HEADERS:", req.headers);

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: "No token" });
  }

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Invalid token format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};
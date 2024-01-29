const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({ err: "Invalid Authentication " });
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, role: payload.role };
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ err: "authentication failed" });
  }
};

const requirePermission = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res
        .status(403)
        .json({ err: "Unauthorized to perform this action" });
    }
    next();
  };
};

module.exports = {requirePermission, authentication}
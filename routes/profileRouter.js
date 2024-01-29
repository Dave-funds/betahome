const router = require("express").Router();
const {
  handleLogin,
  handleRegister,
} = require("../controllers/profileController");

router.post("/register", handleRegister);
router.post("/login", handleLogin);

module.exports = router;
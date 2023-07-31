const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/logout").get(logoutUser);

module.exports = router;

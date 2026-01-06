const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");

const {
  requestOtp,
  verifyOtp,
  setPassword,
  login,
  logout,
  me,
} = require("../controllers/auth.controller");

router.post("/request-otp", requestOtp);
router.post("/verify-otp", verifyOtp);
router.post("/set-password", setPassword);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", protect, me);

module.exports = router;

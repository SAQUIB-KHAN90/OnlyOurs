const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");
const {
  createSecret,
  getSecrets,
} = require("../controllers/secrets.controller");

router.post("/", protect, createSecret);
router.get("/", protect, getSecrets);

module.exports = router;

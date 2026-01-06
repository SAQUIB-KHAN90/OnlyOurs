const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");
const {
  addRage,
  getRage,
  clearRage,
} = require("../controllers/rage.controller");

router.post("/", protect, addRage);
router.get("/", protect, getRage);
router.delete("/clear", protect, clearRage);

module.exports = router;

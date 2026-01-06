const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");
const {
  createMemory,
  getMemories,
} = require("../controllers/memories.controller");

router.post("/", protect, createMemory);
router.get("/", protect, getMemories);

module.exports = router;

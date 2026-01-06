const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");

const {
  addPoetry,
  getPoetries,
} = require("../controllers/poetry.controller");

router.post("/", protect, addPoetry);
router.get("/", protect, getPoetries);

module.exports = router;

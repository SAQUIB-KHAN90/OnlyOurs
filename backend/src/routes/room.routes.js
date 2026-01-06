const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");

const {
  createRoom,
  joinRoom,
  getMyRoom,
} = require("../controllers/room.controller");

router.post("/create", protect, createRoom);
router.post("/join", protect, joinRoom);
router.get("/me", protect, getMyRoom);

module.exports = router;

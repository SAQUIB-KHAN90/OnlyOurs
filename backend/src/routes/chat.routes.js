const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");
const {
  sendMessage,
  getMessages,
} = require("../controllers/chat.controller");

router.post("/send", protect, sendMessage);
router.get("/messages", protect, getMessages);

module.exports = router;

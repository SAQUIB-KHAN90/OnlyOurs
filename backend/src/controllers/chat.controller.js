const Message = require("../models/Message.model");

/* SEND MESSAGE */
exports.sendMessage = async (req, res) => {
  const { message } = req.body;

  if (!message?.trim()) {
    return res.status(400).json({ message: "Message required" });
  }

  await Message.create({
    roomId: req.user.roomId,
    sender: req.user._id,
    message,
  });

  res.json({ success: true });
};

/* GET MESSAGES */
exports.getMessages = async (req, res) => {
  const messages = await Message.find({
    roomId: req.user.roomId,
  }).sort({ createdAt: 1 });

  res.json({ messages });
};

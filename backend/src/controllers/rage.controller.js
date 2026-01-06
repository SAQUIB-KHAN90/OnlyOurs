const Rage = require("../models/Rage.model");

/* ADD RAGE */
exports.addRage = async (req, res) => {
  const { content } = req.body;

  if (!content?.trim()) {
    return res.status(400).json({ message: "Content required" });
  }

  await Rage.create({
    roomId: req.user.roomId,
    content,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
  });

  res.json({ success: true });
};

/* GET RAGE */
exports.getRage = async (req, res) => {
  const messages = await Rage.find({
    roomId: req.user.roomId,
    expiresAt: { $gt: new Date() },
  }).sort({ createdAt: 1 });

  res.json({ messages });
};

/* CLEAR RAGE */
exports.clearRage = async (req, res) => {
  await Rage.deleteMany({ roomId: req.user.roomId });
  res.json({ success: true });
};

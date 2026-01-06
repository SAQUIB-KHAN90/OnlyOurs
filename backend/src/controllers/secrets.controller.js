const Secret = require("../models/Secret.model");

/* CREATE SECRET */
exports.createSecret = async (req, res) => {
  const { content } = req.body;

  if (!content?.trim()) {
    return res.status(400).json({ message: "Content required" });
  }

  await Secret.create({
    roomId: req.user.roomId,
    content,
  });

  res.json({ success: true });
};

/* GET SECRETS */
exports.getSecrets = async (req, res) => {
  const secrets = await Secret.find({
    roomId: req.user.roomId,
  }).sort({ createdAt: -1 });

  res.json({ secrets });
};

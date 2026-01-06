const Poetry = require("../models/Poetry.model");

/* ADD POETRY */
exports.addPoetry = async (req, res) => {
  const { title, content } = req.body;

  if (!content || !content.trim()) {
    return res.status(400).json({ message: "Poetry content required" });
  }

  await Poetry.create({
    roomId: req.user.roomId,
    title,
    content,
  });

  res.json({ success: true });
};

/* GET POETRIES */
exports.getPoetries = async (req, res) => {
  const poems = await Poetry.find({
    roomId: req.user.roomId,
  }).sort({ createdAt: -1 });

  res.json({ poems });
};

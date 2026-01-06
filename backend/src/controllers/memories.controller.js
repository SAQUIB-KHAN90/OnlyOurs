const Memory = require("../models/Memory.model");

/* CREATE MEMORY */
exports.createMemory = async (req, res) => {
  const { title, description, imageUrl, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({ message: "Title and date required" });
  }

  await Memory.create({
    roomId: req.user.roomId,
    title,
    description,
    imageUrl,
    date,
  });

  res.json({ success: true });
};

/* GET MEMORIES */
exports.getMemories = async (req, res) => {
  const memories = await Memory.find({
    roomId: req.user.roomId,
  }).sort({ date: -1 });

  res.json({ memories });
};

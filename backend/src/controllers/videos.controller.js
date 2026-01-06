const Video = require("../models/Video.model");

exports.addVideo = async (req, res) => {
  const { title, videoUrl } = req.body;
  await Video.create({ roomId: req.user.roomId, title, videoUrl });
  res.json({ success: true });
};

exports.getVideos = async (req, res) => {
  const videos = await Video.find({ roomId: req.user.roomId });
  res.json({ videos });
};

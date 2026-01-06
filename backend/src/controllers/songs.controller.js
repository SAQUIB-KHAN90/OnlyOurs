const Song = require("../models/Song.model");

exports.addSong = async (req, res) => {
  const { title, artist, url } = req.body;
  await Song.create({ roomId: req.user.roomId, title, artist, url });
  res.json({ success: true });
};

exports.getSongs = async (req, res) => {
  const songs = await Song.find({ roomId: req.user.roomId });
  res.json({ songs });
};

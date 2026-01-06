const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  title: String,
  artist: String,
  url: String,
}, { timestamps: true });

module.exports = mongoose.model("Song", songSchema);

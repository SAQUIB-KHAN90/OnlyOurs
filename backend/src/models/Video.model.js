const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  title: String,
  videoUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Video", videoSchema);

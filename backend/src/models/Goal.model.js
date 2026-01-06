const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  title: String,
  completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Goal", goalSchema);

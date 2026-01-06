const mongoose = require("mongoose");

const milestoneSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  title: String,
  description: String,
  date: Date,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Milestone", milestoneSchema);

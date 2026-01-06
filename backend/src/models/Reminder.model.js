const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  title: String,
  remindAt: Date,
  tone: String,
}, { timestamps: true });

module.exports = mongoose.model("Reminder", reminderSchema);

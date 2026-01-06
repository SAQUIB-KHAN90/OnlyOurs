const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  title: String,
  description: String,
  imageUrl: String,
  date: Date,
}, { timestamps: true });

module.exports = mongoose.model("Memory", memorySchema);

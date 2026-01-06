const mongoose = require("mongoose");

const rageSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  content: String,
  expiresAt: Date,
}, { timestamps: true });

module.exports = mongoose.model("Rage", rageSchema);

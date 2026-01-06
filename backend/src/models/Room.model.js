const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  inviteCode: {
    type: String,
    unique: true,
  },
  partner1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  partner2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
}, { timestamps: true });

module.exports = mongoose.model("Room", roomSchema);

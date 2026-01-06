const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  identifier: {
    type: String, // email or phone
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    default: null,
  },
  role: {
    type: String,
    enum: ["partner1", "partner2"],
    default: "partner1",
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const generateOTP = require("../utils/otp");
const generateToken = require("../utils/jwt");

/* REQUEST OTP */
exports.requestOtp = async (req, res) => {
  const { identifier } = req.body;

  let user = await User.findOne({ identifier });
  if (!user) user = await User.create({ identifier });

  const otp = generateOTP();
  user.otp = otp;
  user.otpExpiry = Date.now() + 5 * 60 * 1000;
  await user.save();

  console.log("OTP (dev only):", otp);

  res.json({ success: true, message: "OTP sent" });
};

/* VERIFY OTP */
exports.verifyOtp = async (req, res) => {
  const { identifier, otp } = req.body;

  const user = await User.findOne({ identifier });
  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  user.otp = null;
  user.otpExpiry = null;
  await user.save();

  res.json({ success: true });
};

/* SET PASSWORD */
exports.setPassword = async (req, res) => {
  const { identifier, password } = req.body;
  const user = await User.findOne({ identifier });

  user.password = await bcrypt.hash(password, 10);
  await user.save();

  const token = generateToken(user._id);
  res.cookie("onlyours_token", token, {
    httpOnly: true,
    maxAge: 48 * 60 * 60 * 1000,
  });

  res.json({ success: true, user });
};

/* LOGIN */
exports.login = async (req, res) => {
  const { identifier, password } = req.body;
  const user = await User.findOne({ identifier });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id);
  res.cookie("onlyours_token", token, {
    httpOnly: true,
    maxAge: 48 * 60 * 60 * 1000,
  });

  res.json({ success: true, user });
};

/* LOGOUT */
exports.logout = async (req, res) => {
  res.clearCookie("onlyours_token");
  res.json({ success: true });
};

/* GET ME */
exports.me = async (req, res) => {
  res.json({ authenticated: true, user: req.user });
};

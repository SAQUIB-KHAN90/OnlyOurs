const Room = require("../models/Room.model");
const User = require("../models/User.model");

/* Generate Invite Code */
const generateInviteCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

/* CREATE ROOM */
exports.createRoom = async (req, res) => {
  const user = req.user;

  if (user.roomId) {
    return res.status(400).json({ message: "User already has a room" });
  }

  const inviteCode = generateInviteCode();

  const room = await Room.create({
    inviteCode,
    partner1: user._id,
  });

  user.roomId = room._id;
  user.role = "partner1";
  await user.save();

  res.json({
    success: true,
    room: {
      id: room._id,
      inviteCode,
    },
  });
};

/* JOIN ROOM */
exports.joinRoom = async (req, res) => {
  const { inviteCode } = req.body;
  const user = req.user;

  if (user.roomId) {
    return res.status(400).json({ message: "User already has a room" });
  }

  const room = await Room.findOne({ inviteCode });

  if (!room || room.partner2) {
    return res.status(400).json({ message: "Invalid or expired invite code" });
  }

  room.partner2 = user._id;
  room.inviteCode = null; // invalidate
  await room.save();

  user.roomId = room._id;
  user.role = "partner2";
  await user.save();

  res.json({
    success: true,
    room: {
      id: room._id,
    },
  });
};

/* GET MY ROOM */
exports.getMyRoom = async (req, res) => {
  const user = req.user;

  if (!user.roomId) {
    return res.json({ hasRoom: false });
  }

  res.json({
    hasRoom: true,
    roomId: user.roomId,
    role: user.role,
  });
};

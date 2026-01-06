const Milestone = require("../models/Milestone.model");

exports.addMilestone = async (req, res) => {
  await Milestone.create({ ...req.body, roomId: req.user.roomId });
  res.json({ success: true });
};

exports.getMilestones = async (req, res) => {
  const milestones = await Milestone.find({ roomId: req.user.roomId });
  res.json({ milestones });
};

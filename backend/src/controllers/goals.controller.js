const Goal = require("../models/Goal.model");

exports.addGoal = async (req, res) => {
  await Goal.create({ title: req.body.title, roomId: req.user.roomId });
  res.json({ success: true });
};

exports.getGoals = async (req, res) => {
  const goals = await Goal.find({ roomId: req.user.roomId });
  res.json({ goals });
};

exports.toggleGoal = async (req, res) => {
  const goal = await Goal.findOne({ _id: req.params.id, roomId: req.user.roomId });
  goal.completed = !goal.completed;
  await goal.save();
  res.json({ success: true });
};

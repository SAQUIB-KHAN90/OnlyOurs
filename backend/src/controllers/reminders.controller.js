const Reminder = require("../models/Reminder.model");

exports.addReminder = async (req, res) => {
  await Reminder.create({ ...req.body, roomId: req.user.roomId });
  res.json({ success: true });
};

exports.getReminders = async (req, res) => {
  const reminders = await Reminder.find({ roomId: req.user.roomId });
  res.json({ reminders });
};

exports.deleteReminder = async (req, res) => {
  await Reminder.deleteOne({ _id: req.params.id, roomId: req.user.roomId });
  res.json({ success: true });
};

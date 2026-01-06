const Pet = require("../models/Pet.model");

exports.addPet = async (req, res) => {
  await Pet.create({ ...req.body, roomId: req.user.roomId });
  res.json({ success: true });
};

exports.getPets = async (req, res) => {
  const pets = await Pet.find({ roomId: req.user.roomId });
  res.json({ pets });
};

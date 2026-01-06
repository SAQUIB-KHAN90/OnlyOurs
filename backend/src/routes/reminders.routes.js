const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const {
  addReminder,
  getReminders,
  deleteReminder,
} = require("../controllers/reminders.controller");

router.post("/", protect, addReminder);
router.get("/", protect, getReminders);
router.delete("/:id", protect, deleteReminder);

module.exports = router;

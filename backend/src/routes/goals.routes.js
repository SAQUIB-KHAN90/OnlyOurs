const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const { addGoal, getGoals, toggleGoal } = require("../controllers/goals.controller");

router.post("/", protect, addGoal);
router.get("/", protect, getGoals);
router.patch("/:id", protect, toggleGoal);

module.exports = router;

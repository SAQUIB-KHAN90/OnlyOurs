const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const { addMilestone, getMilestones } = require("../controllers/milestones.controller");

router.post("/", protect, addMilestone);
router.get("/", protect, getMilestones);

module.exports = router;

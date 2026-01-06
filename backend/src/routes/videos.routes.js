const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const { addVideo, getVideos } = require("../controllers/videos.controller");

router.post("/", protect, addVideo);
router.get("/", protect, getVideos);

module.exports = router;

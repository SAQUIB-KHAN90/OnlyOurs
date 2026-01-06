const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const { addSong, getSongs } = require("../controllers/songs.controller");

router.post("/", protect, addSong);
router.get("/", protect, getSongs);

module.exports = router;

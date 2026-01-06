const router = require("express").Router();
const protect = require("../middlewares/auth.middleware");
const { addPet, getPets } = require("../controllers/pets.controller");

router.post("/", protect, addPet);
router.get("/", protect, getPets);

module.exports = router;

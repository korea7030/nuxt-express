const express = require("express");
const router = express.Router();
const musicController = require("../controller/musicController");
const upload = require("../../config/multer");


router.get("/", musicController.getAllMusics);  // Get all Music
router.post("/", upload.upload.single("music"), musicController.addNewMusic);   // Add new music
router.delete("/:musicId", musicController.deleteMusic);    //Delete a music
module.exports = router;
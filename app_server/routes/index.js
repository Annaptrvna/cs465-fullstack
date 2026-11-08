const express = require("express");
const router = express.Router();

const ctrlMain = require("../controllers/main");

// Homepage
router.get("/", ctrlMain.homelist);

module.exports = router;

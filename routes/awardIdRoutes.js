const express = require("express");
const router = express();
const awardController = require("../controllers/Awards");

router.get("/", awardController.index);

module.exports = router;

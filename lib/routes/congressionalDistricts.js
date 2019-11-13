const express = require("express");
const router = express();
const congressionalController = require("../controllers/congressional");
router.get("/", congressionalController.index);
module.exports = router;

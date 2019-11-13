const express = require("express");
const router = express();
const congressionalController = require("../controllers/congressional");
router.get("/congress", congressionalController.index);
module.exports = router;

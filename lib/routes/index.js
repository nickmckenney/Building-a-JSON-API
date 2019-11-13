const express = require("express");
const router = express.Router();

router.use("/state", require("./statesRoutes.js"));

module.exports = router;

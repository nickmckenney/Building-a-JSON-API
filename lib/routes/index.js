const express = require("express");
const router = express.Router();

router.use(require("./statesRoutes.js"));

module.exports = router;

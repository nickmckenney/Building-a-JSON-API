const express = require("express");
const router = express.Router();
const stateController = require("../controllers/states.js");

router.get("/", stateController.index);
router.get("/:name/", stateController.showStateName);
router.delete("/:name/", stateController.delete);

module.exports = router;

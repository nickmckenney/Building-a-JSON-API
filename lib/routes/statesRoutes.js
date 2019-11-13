const express = require("express");
const router = express();
const stateController = require("../controllers/states");

router.get("/state", stateController.index);
router.get("/state/:name", stateController.showStateName);
router.post("/state", stateController.create);
router.delete("/state/:name", stateController.delete);
router.post("/state/:name", stateController.edit);
module.exports = router;

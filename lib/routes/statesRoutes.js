const express = require("express");
const router = express();
const stateController = require("../controllers/states");

router.get("/state", stateController.index);
router.get("state/:name", stateController.showName);
router.get("/state", stateController.create);
router.get("state/:name", stateController.edit);
router.get("state/:name", stateController.delete);

module.exports = router;

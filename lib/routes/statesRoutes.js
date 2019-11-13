const express = require("express");
const router = express();
const stateController = require("../controllers/states");

router.get("/", stateController.index);
router.get("/:name", stateController.showStateName);
router.post("/", stateController.create);
router.delete("/:name", stateController.delete);
router.post("/:name", stateController.edit);
module.exports = router;

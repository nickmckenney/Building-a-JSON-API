const express = require("express");
const router = express();
const awardSpendingController = require("../controllers/awardSpending");

router.get("/awardSpending", awardSpendingController.index);
router.get("awardSpending/:name", awardSpendingController.showStateName);
// router.get("/awardSpending", awardSpendingController.create);
// router.get("awardSpending/:name", awardSpendingController.edit);
// router.delete("awardSpending/:name", awardSpendingController.delete);

module.exports = router;
const express = require("express");
const router = express();
const awardSpendingController = require("../controllers/awardSpendings");

router.get("/awardSpending", awardSpendingController.index);
router.get("awardSpending/:name", awardSpendingController.showStateName);
// router.get("/awardSpending", awardSpendingController.create);
// router.get("awardSpending/:name", awardSpendingController.edit);
// router.get("awardSpending/:name", awardSpendingController.delete);

module.exports = router;

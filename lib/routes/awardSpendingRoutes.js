const express = require("express");
const router = express();
const awardSpendingController = require("../controllers/awardSpending");
router.get("/awardSpending", awardSpendingController.index);
router.get(
  "/awardSpending/:award_category",
  awardSpendingController.showAwardCategory
);
// router.get("/awardSpending/:recipient_name", awardSpendingController.showName);
module.exports = router;

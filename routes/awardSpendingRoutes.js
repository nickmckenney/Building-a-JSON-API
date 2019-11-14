const express = require("express");
const router = express();
const awardSpendingController = require("../controllers/awardSpending");
router.get("/awardSpending", awardSpendingController.index);
router.get(
  "/awardSpending/:award_category",
  awardSpendingController.showAwardCategory
);
module.exports = router;

const awardSpending = require("../models/awardSpendingSchema");
const awardSpendingController = {
  index: (req, res) => {
    awardSpending.find({}).then(states => {
      res.json(states);
    });
  },
  showAwardCategory: (req, res) => {
    awardSpending
      .find({ award_category: req.params.award_category })
      .then(states => {
        res.json(states);
      });
  }
  // showName: (req, res) => {
  //   awardSpending
  //     .find({ recipient_name: req.params.recipient_name })
  //     .then(states => {
  //       res.json(states);
  //     });
  // }
};
module.exports = awardSpendingController;

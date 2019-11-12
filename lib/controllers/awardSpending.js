const awardSpending = require("../models/awardSpendingSchema");
const awardSpendingController = {
  index: (req, res) => {
    awardSpending.find({}).then(states => {
      res.json(states);
    });
  },
  showStateName: (res, req) => {
    awardSpending.findOne({}).then(states => {
      res.json(states);
    });
  }
};
module.exports = awardSpendingController;

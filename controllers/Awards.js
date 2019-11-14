const awardId = require("../models/awardSchema");
const awardIdController = {
  index: (req, res) => {
    awardId.find({}).then(states => {
      res.json(states);
    });
  }
};
module.exports = awardIdController;

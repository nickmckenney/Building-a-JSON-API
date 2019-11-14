const congressionalSpending = require("../models/congressional");
const congressionalController = {
  index: (req, res) => {
    congressionalSpending.find({}).then(congress => {
      res.json(congress);
    });
  }
};
module.exports = congressionalController;

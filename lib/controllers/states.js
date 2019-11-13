const State = require("../models/statesSchema");
const stateController = {
  index: (req, res) => {
    State.find({}).then(states => {
      res.json(states);
    });
  },
  showStateName: (res, req) => {
    State.findOne({}).then(states => {
      res.json(states);
    });
  },
  delete: (res, req) => {
    State.findOneAndDelete({ name: req.params.name }).then(states => {
      res.json(states);
    });
  }
  // create: (res, req) => {
  //   State.create({ name: req.params.name }).then(states => {
  //     res.json(states);
  //   });
  // }
};
module.exports = stateController;

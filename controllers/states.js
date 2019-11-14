const State = require("../models/statesSchema");
const stateController = {
  index: (req, res) => {
    State.find({}).then(states => {
      res.json(states);
    });
  },
  edit: (req, res) => {
    State.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(states => {
      res.json(states);
    });
  },
  showStateName: (req, res) => {
    State.findOne({ name: req.params.name }).then(states => {
      res.json(states);
    });
  },
  delete: (req, res) => {
    State.findOneAndDelete({ name: req.params.name }).then(states => {
      res.json(states);
    });
  },
  create: (req, res) => {
    State.create(req.body).then(states => {
      res.json(states);
    });
  }
};
module.exports = stateController;

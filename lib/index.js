const express = require("express");
const app = express();
const parser = require("body-parser");
const StateModel = require("./models/statesSchema.js");
app.use(parser.json());

app.use(require("./routes/statesRoutes"));
app.use(require("./routes/awardSpendingRoutes"));

app.get("/state/:name", function(req, res) {
  StateModel.findOne({ name: req.params.name }).then(states => {
    res.json(states);
  });
});

app.post("/state/:name", function(req, res) {
  StateModel.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true
  }).then(stateName => {
    res.json(stateName);
  });
});

app.delete("/state/:name", function(req, res) {
  StateModel.findOneAndDelete({ name: req.params.name }).then(state => {
    res.json(state);
  });
});

app.listen(4000, () => {
  console.log("Is your server running? Better go catch it!");
});

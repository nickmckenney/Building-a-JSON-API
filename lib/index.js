const express = require("express");
const app = express();
const parser = require("body-parser");
const StateModel = require("./models/statesSchema.js");

app.use(parser.json());

app.use(require("./routes/stateRoutes"));

app.get("/state/:name", function(req, res) {
  StateModel.findOne({ name: req.params.name }).then(states => {
    res.json(states);
  });
});
app.listen(4000, () => {
  console.log("Is your server running? Better go catch it!");
});

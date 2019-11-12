const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const State = new Schema({
  name: String,
  code: String,
  fips: String,
  amount: Number
});

module.exports = mongoose.model("State", State);

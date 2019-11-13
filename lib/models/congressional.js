const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CongressSchema = new Schema({
  percentage_of_total_budget_authority: Number,
  agnecy_id: String,
  congressional_justification_url: String,
  current_total_budget_authority_amount: Number
});

module.exports = mongoose.model("CongressSchema", CongressSchema);

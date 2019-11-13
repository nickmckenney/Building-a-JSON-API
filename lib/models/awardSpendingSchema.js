const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const awardSpendingSchema = new Schema({
  award_category: String,
  obligated_amount: String,
  recipient: {
    recipient_id: Number,
    recipient_name: String
  }
});

module.exports = mongoose.model("awardSpendingSchema", awardSpendingSchema);

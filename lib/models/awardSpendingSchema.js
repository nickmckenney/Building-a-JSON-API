const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const awardSpendingSchema = new Schema({
  RecipientListing: {
    award_category: String,
    obligated_amount: String
  },
  Recipient: {
    recipient_id: Number,
    recipient_name: String
  }
});

module.exports = mongoose.model("awardSpendingSchema", awardSpendingSchema);

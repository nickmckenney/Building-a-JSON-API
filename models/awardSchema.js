const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const awardSchema = new Schema({
  financial_accounts_by_awards_id: Number,
  treasury_account: {
    treasury_account_identifier: Number,
    account_title: String,
    reporting_agency_id: String,
    reporting_agency_name: String,
    federal_account: {
      main_account_code: String,
      account_title: String,
      federal_account_code: String
    },
    award: Number
  }
});

module.exports = mongoose.model("awardSchema", awardSchema);

const State = require("../models/statesSchema.js");
const awardSpending = require("../models/awardSpendingSchema.js");

const data = require("./statesData.json");
const dataSpending = require("./awardSpending.json");

const statesData = data.map(item => {
  const states = {};
  states.name = item.name;
  states.code = item.code;
  states.amount = item.amount;
  states.count = item.count;
  return states;
});

console.log(statesData);

State.remove({}).then(() => {
  State.create(statesData)
    .then(states => {
      console.log(states);
    })
    .catch(err => {
      console.log(err);
    });
});
//AwardspendingData
//AwardspendingData
//AwardspendingData

const awardSpendingData = dataSpending.map(itemSpending => {
  const spending = {};
  spending.award_category = itemSpending.results[0].award_category;
  spending.obligated_amount = itemSpending.results[0].obligated_amount;
  spending.recipient_id = itemSpending.results[0].recipient_id;
  spending.recipient_name = itemSpending.results[0].recipient_name;
  return spending;
});

console.log(awardSpendingData);

awardSpending.remove({}).then(() => {
  awardSpending
    .create(awardSpendingData)
    .then(states => {
      console.log(states);
    })
    .catch(err => {
      console.log(err);
    });
});

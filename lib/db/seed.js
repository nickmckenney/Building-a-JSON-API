const State = require("../models/statesSchema.js");
const awardSpending = require("../models/awardSpendingSchema.js");
const data = require("./statesData.json");
const dataSpending = require("./awardSpending.json");
State.deleteMany({}).then(() => {
  State.create(data).then(programsArray => {
    console.log(programsArray);
    process.exit();
  });
});

awardSpending.deleteMany({}).then(() => {
  awardSpending.create(dataSpending).then(hi => {
    console.log(hi);
    process.exit();
  });
});

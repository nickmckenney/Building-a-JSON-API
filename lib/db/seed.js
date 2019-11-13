const State = require("../models/statesSchema.js");
const awardSpending = require("../models/awardSpendingSchema.js");
const data = require("./statesData.json");
const dataSpending = require("./awardSpending.json");
const dataAwards = require("./awardIDS.json");
const Award = require("../models/awardSchema.js");
const Congressional = require("../models/congressional.js");
const congressionalData = require("./congressional.json");
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
Award.deleteMany({}).then(() => {
  Award.create(dataAwards).then(hi => {
    console.log(hi);
    process.exit();
  });
});
Congressional.deleteMany({}).then(() => {
  Congressional.create(congressionalData).then(hi => {
    console.log(hi);
    process.exit();
  });
});

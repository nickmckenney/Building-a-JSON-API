const State = require("../models/states.js");
const data = require("./statesData.json");

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

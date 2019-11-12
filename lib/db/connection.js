const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/federalSpending_db", {
  useNewUrlParser: true
});

module.exports = mongoose;

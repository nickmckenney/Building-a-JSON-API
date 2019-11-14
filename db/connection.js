const mongoose = require("mongoose");
mongoose.Promise = Promise;
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/book-e";
}
mongoose.connect("mongodb://localhost/federalSpending_db", {
  useNewUrlParser: true
});

module.exports = mongoose;

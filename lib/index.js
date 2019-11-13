const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());
app.use(require("./routes/index.js"));
app.listen(4000, () => {
  console.log("Is your server running? Better go catch it!");
});

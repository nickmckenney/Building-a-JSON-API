const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());

app.use("/state", require("./routes/statesRoutes"));
app.use(require("./routes/awardSpendingRoutes"));
app.use("/awardId", require("./routes/awardIdRoutes"));
app.use("/congress", require("./routes/congressionalDistricts.js"));

app.listen(4000, () => {
  console.log("Is your server running? Better go catch it!");
});

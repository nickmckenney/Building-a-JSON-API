const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());

app.use(require("./routes/statesRoutes"));
app.use(require("./routes/awardSpendingRoutes"));
app.use(require("./routes/awardIdRoutes"));
app.use(require("./routes/congressionalDistricts.js"));

app.listen(4000, () => {
  console.log("Is your server running? Better go catch it!");
});

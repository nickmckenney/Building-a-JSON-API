const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());

app.use("/state", require("./routes/statesRoutes"));
app.use(require("./routes/awardSpendingRoutes"));
app.use("/awardId", require("./routes/awardIdRoutes"));
app.use("/congress", require("./routes/congressionalDistricts.js"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

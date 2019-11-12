// const fs = require("fs");
// const fetch = require("node-fetch");
// const url = "https://api.usaspending.gov/api/v2/recipient/state/";

// fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     console.log(res);
//     let states = JSON.stringify(res);
//     fs.writeFile("./db/statesData.json", states, err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("success");
//       }
//     });
//   });

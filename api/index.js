const express = require("express");
const app = express();
require("dotenv").config();
const { port } = process.env;
const routerApi = require("./routes")

app.get("/", (req, res) => {
  res.send("<h1>My nueva API</h1>");
});


routerApi(app)
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

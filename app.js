const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const mustacheExpress = require("mustache-express");
const app = express();
const url = "mongodb://localhost:27017/test";
const port = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());

mongoose.connect(url);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function callback() {
  console.log("Connected To MongoDB Database");
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(routes);

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

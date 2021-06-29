const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const apiController = require('./app/controllers/AdminController');

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};


app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// call sysc()
const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bogo node application." });
});

// tutorial routes
require("./app/routes/index.js")(app);

// app.use("/api", apiController);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});    
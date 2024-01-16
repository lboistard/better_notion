require("dotenv").config()

import express = require("express");
import bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const passport = require("passport");
const session = require("express-session");

const api = require("./api");
require("./auth/strategies");

app.use(cors());
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);


app.use(passport.initialize());
app.use(passport.session());
app.use("/api", api);

module.exports = app;

require("dotenv").config()

import express = require("express");
import bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const passport = require("passport");
const session = require("express-session");

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

const auth = require("./routes/auth");
app.use("/api/auth", auth)

module.exports = app;

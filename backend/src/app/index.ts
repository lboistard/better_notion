require("dotenv").config()

import express = require('express');
import bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const passport = require('passport');
require("./auth/strategies");

app.use(cors());
app.use(bodyParser.json())
app.use(passport.initialize());

const auth = require("./routes/auth");
app.use('/api/auth', auth)

module.exports = app;

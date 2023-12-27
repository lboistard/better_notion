import express = require('express');
import bodyParser = require("body-parser");

const app = express();

const cors = require('cors')
const corsOption = {
    origin: ["*"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors());

app.use(bodyParser.json())

const api = require("./api");
app.use('/api', api)

module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/index')(app);

var porta =  3000 || process.env.PORT
app.listen(porta);
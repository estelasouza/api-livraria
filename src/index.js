const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/index')(app);
require('./controllers/crud')(app);

var porta =  process.env.PORT || 3000
app.listen(porta);
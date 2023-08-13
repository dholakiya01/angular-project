const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('./admin/config/db');
const  route  = require('./admin/User/router/user.router');

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors());
app.use(express.json())
app.use(route);
app.use(express.urlencoded({ extended: true }));

app.listen(4000, console.log(" hello I am running port 4000"))
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const helmet = require('helmet');

const router = require('./router');
const model = require('./models/user');


mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost:27017/rapp");

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

router(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log("ERR:::::::: ",err);
  res.status(err.status || 500);
  res.send({err: `Error: ${err.status}`});
});

module.exports = app;

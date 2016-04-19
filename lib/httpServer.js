'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var qs = require('qs');

var httpRoutes = require('./httpRoutes');

var app = express();
var server = http.Server(app);

app.set('query parser', function(body){
  return qs.parse(body, { arrayLimit: 1000 });
});

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

httpRoutes(app);

module.exports = server;

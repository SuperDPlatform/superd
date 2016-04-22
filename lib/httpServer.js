'use strict';

var config = require('../config');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var qs = require('qs');

var httpRoutes = require('./httpRoutes');
var sse = require('./sse');

var app = express();
var server = http.Server(app);

app.set('query parser', function(body){
  return qs.parse(body, { arrayLimit: config.queryParser.arrayLimit });
});

app.use(bodyParser.json({ limit: config.bodyParser.json.limit }));
app.use(bodyParser.urlencoded({ limit: config.bodyParser.urlEncoded.limit, extended: true }));

app.use(sse);

httpRoutes(app);

module.exports = server;

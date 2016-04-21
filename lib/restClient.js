'use strict';

var config = require('../config');
var url = require('url');
var restler = require('restler');

var headers = {
  'Accept': 'application/json',
  'User-Agent': 'superd',
  'X-Api-Key': config.rest.apiKey
};

function post(url, data, cb) {
  restler.postJson(config.rest.url + url, data,  { headers: headers }).on('complete', function(result) {
    if (result instanceof Error) {
      cb(null, result);
    } else {
      cb(result);
    }
  }).on('timeout', function(ms) {
    cb(null, new Error('Timeout'));
  });
}

module.exports = {
  post: post
}

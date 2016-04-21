'use strict';

var _ = require('lodash');
var url = require('url');
var restClient = require('../restClient');
var generateUuid = require('../generateUuid');
var router = require('express').Router();

router.post('/', function(req, res) {
  var newDevice = {
    uuid: generateUuid(req.body.hwaddress),
    online: false,
    paired: false
  };

  var data = _.extend({}, newDevice, req.body);

  restClient.post('/devices', { device: data }, function(result, error) {
    if (error instanceof Error) {
      res.sendStatus(500);
      return;
    }

    res.send(result);
  });
});

module.exports = router;

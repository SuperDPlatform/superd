'use strict';

var router = require('express').Router();

router.post('/', function(req, res) {
  res.sendStatus(200);
});

module.exports = router;

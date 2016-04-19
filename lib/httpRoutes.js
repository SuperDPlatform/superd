'use strict';

function httpRoutes(server) {
  server.post('/devices', function(req, res) {
    res.sendStatus(200);
  });

  server.post('/messages', function(req, res) {
    res.sendStatus(200);
  });
}

module.exports = httpRoutes;

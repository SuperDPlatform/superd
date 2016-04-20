'use strict';

function httpRoutes(server) {
  server.use('/devices', require('./routes/devices'));
  server.use('/messages', require('./routes/messages'));
}

module.exports = httpRoutes;

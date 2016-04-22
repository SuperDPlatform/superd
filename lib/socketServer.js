var config = require('../config');
var io = require('socket.io');
var redisAdapter = require('socket.io-redis');

function socketServer(httpServer) {
  io(httpServer).adapter(redisAdapter({ host: config.redis.host, port: config.redis.port }));
}

module.exports = socketServer;

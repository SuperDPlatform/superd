var io = require('socket.io');

function socketServer(httpServer) {
  io(httpServer);
}

module.exports = socketServer;

'use strict';

var httpServer = require('./lib/httpServer');
var socketServer = require('./lib/socketServer')(httpServer);

httpServer.listen(8080);

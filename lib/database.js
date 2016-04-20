var config = require('../config');
var adapter = require('./adapters/' + config.database.adapter);

module.exports = {
  devices: adapter.devices
}

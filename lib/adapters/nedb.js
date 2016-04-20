var config = require('../../config');
var path = require('path');
var Datastore = require('nedb');

module.exports = {
  devices: new Datastore({
    filename: path.join(config.database.nedb.path, '/devices.db'),
    autoload: true
  })
}

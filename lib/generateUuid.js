var config = require('../config');
var Hashids = require("hashids");

function generateUuid(hwaddress) {
  hwaddress = hwaddress.split(':').join('').split('');

  var code = 0;

  for (var i = 0; i < hwaddress.length; i++) {
    var c = parseInt(hwaddress[i], 16);
    code += c * (i + 11) * 27;
  }

  var hashids = new Hashids(config.uuidSalt);

  return hashids.encode(code);
}

module.exports = generateUuid;

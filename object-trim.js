var clone = require('clone');

function trimObject (obj, length) {

  var keys = Object.keys(obj),
      i    = length,
      _obj = clone(obj);

  for( i ; i < keys.length ; ++i) {
    delete _obj[keys[i]];
  }

  return _obj;

}

module.exports = trimObject;

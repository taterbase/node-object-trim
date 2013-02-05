#Object Trim
*Sometimes objects are too big...*

##Usage

var trimObject = require('object-trim');

var obj = {
  "this": "Object",
  "is" : "just",
  "too": "darn",
  "big": "ya know?"
};

var newObj = trimObject(obj, 2);  // { "this": "Object", "is": "just" }

##License
MIT

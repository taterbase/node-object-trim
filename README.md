#Object Trim
*Sometimes objects are too big...*

##Usage
```javascript
var objectTrim = require('object-trim');

var obj = {
  "this": "Object",
  "is" : "just",
  "too": "darn",
  "big": "ya know?"
};

var newObj = objectTrim(obj, 2);  // { "this": "Object", "is": "just" }
```

##License
MIT

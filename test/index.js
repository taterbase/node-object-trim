var objectTrim = require('../object-trim'),
    should = require('should');

describe('Object Trim', function(){
  it('should trim objects', function(){

    var obj = {
      "this": "Object",
      "is" : "just",
      "too": "darn",
      "big": "ya know?"
    };

    var newObj = objectTrim(obj, 2);  // { "this": "Object", "is": "just" }

    newObj.should.have.property('this');
    newObj.should.have.property('is');
    newObj.should.not.have.property('too');
    newObj.should.not.have.property('big');

  });
});

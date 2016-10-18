// CommonJS style
var dependency = require("./CommonJSDependency");
// your code

// AMD style
define(["require", "exports", 'AmdDependency'], function (require, exports, __dependency__) {
    var dependency = __dependency__;
    // your code
});

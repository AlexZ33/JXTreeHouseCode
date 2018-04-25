var fs = require("fs"),
  rollup = require("rollup"),
  dependences = require("./package.json").dependencies;

//http://www.rollupjs.com/javascript-api/
rollup.rollup({
  input: "index.js",
  external: Object.keys(dependences)
}).then(function(bundle){
  return bundle.generate({format:"cjs"});
}).then(function(result){
  var code = result.code + "Object.defineProperty(exports, \"event\", {get: function() {return })"
  return new Promise(function (resolve, reject) {
    fs.writeFile("dist/jxcode.node.js", code, "utf8", function(error) {
      if(error) return reject(error);
      else resolve();
    });
  });
}).catch(abort);


function abort(error) {
  console.error(error.stack);
}

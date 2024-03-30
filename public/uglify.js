const UglifyJS = require("uglify-js");
const glob = require("glob");
const fs = require("fs");

glob("dist/js/*.js", function (er, files) {
  files.forEach(function (file) {
    const result = UglifyJS.minify(fs.readFileSync(file, "utf8"));
    fs.writeFileSync(file.replace(".js", ".min.js"), result.code);
  });
});

glob("dist/js/components/*.js", function (er, files) {
  files.forEach(function (file) {
    const result = UglifyJS.minify(fs.readFileSync(file, "utf8"));
    fs.writeFileSync(file.replace(".js", ".min.js"), result.code);
  });
});

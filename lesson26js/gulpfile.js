const { src, dest, watch, series } = require("gulp");
function coppyFiles() {
  return src("src/**/*").pipe(dest("dist"));
}
exports.default = series(coppyFiles);
const { task } = require("gulp");
function testTask(done) {
  console.log("Hello test ");
  done();
}
exports.test = testTask;

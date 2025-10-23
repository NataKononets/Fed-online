const { src, dest, watch, series } = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");

function styles() {
  return src("srs/css/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));
}
function watcher() {
  watch("srs/css/**/*.css", styles);
}
exports.styles = styles;
exports.watch = watcher;
exports.default = series(styles);

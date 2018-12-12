var gulp = require("gulp"),
  del = require("del"),
  fs = require("fs"),
  browserify = require("browserify"),
  buffer = require("vinyl-buffer"),
  splitRequire = require("split-require"),
  to = require("flush-write-stream"),
  hasha = require("hasha"),
  source = require("vinyl-source-stream"),
  babel = require("gulp-babel");

gulp.task("react-compile", function() {
  return gulp
    .src("components/**", {
      base: "."
    })
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          "@babel/plugin-transform-react-jsx",
          "dynamic-import-split-require",
          "@babel/plugin-syntax-dynamic-import"
        ]
      })
    )
    .pipe(gulp.dest("react/"));
});

gulp.task("browserify", function(done) {
  var b = browserify({
    entries: "react/components/main.js",
    debug: true
  }).plugin(splitRequire, {
    output: function(bundleName) {
      var stream = fs.createWriteStream("bundle/" + bundleName);
      return to(onwrite, onend);

      function onwrite(chunk, enc, cb) {
        stream.write(chunk, cb);
      }

      function onend(cb) {
        stream.end();
        var hash =
          hasha.fromFileSync("bundle/" + bundleName, {
            algorithm: "sha256"
          }) + ".js";

        this.emit("name", "bundle/" + hash);
        fs.rename("bundle/" + bundleName, "bundle/" + hash, cb);
      }
    }
  });

  return b
    .bundle()
    .pipe(source("bundle/main.js"))
    .pipe(buffer())
    .pipe(gulp.dest("."));
});

gulp.task("clean", function(cb) {
  del.sync("react/");
  del.sync("bundle/");

  fs.mkdirSync("bundle/");
  cb();
});

gulp.task("default", gulp.series("clean", "react-compile", "browserify"));

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass")(require("sass"));
var autoprefixer = require("gulp-autoprefixer");

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./css/*.sass", gulp.series("sass"));
  gulp.watch("**/*.html", browserSync.stream());
});

gulp.task("sass", function () {
  return gulp
    .src("./css/main.sass")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("browser-sync"), function () {});

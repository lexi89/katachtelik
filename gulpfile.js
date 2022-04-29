var fileinclude = require('gulp-file-include')
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass")(require("sass"));
var autoprefixer = require("gulp-autoprefixer");

gulp.task("browser-sync", function () {
  gulp.watch("./css/*.sass", gulp.series("sass"));
  var files = [
    '*.html',
    'css/**/*.css',
    'js/**/*.js',
    'sass/**/*.scss'
  ];
  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
  // gulp.watch("**/*.html", browserSync.stream());
  // gulp.watch("**/*.html", browserSync.reload);
});

gulp.task('fileinclude', function (done) {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
  done();
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

gulp.task("default", gulp.series("browser-sync"), function () { });

var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require("gulp-sass");
var autoprefixer  = require("gulp-autoprefixer");

gulp.task("default", ["browser-sync"], function(){
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server:{
          baseDir: "./"
        }
    });
    gulp.watch("./css/*.sass", ["sass"]);
    gulp.watch("./*.html",
  browserSync.stream());
});

gulp.task("sass", function(){
  return gulp.src("./css/main.sass")
  .pipe(sass({
    outputStyle: "compressed"
  })
    .on("error", sass.logError)
  )
  .pipe(autoprefixer({
    browsers: ["last 2 versions"]
  }))
  .pipe(gulp.dest("./css"))
  .pipe(browserSync.stream());
});

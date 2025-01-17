// Importar los mÃ³dulos y plugins que se usarÃ¡n. Cada uno se impotar con require('modulo')
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug2');
// var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

// Crear tarea

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});
gulp.task('pug', function () {
  return gulp.src('./pug/*.pug')
  .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    // Your options in here.
});
gulp.task('pug2', function () {
  return gulp.src('./pug/templates/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    // Your options in here.
});
gulp.task('default', function () {
  browserSync.init({
    server: './'
  });
  gulp.task('watch', function(){
//    gulp.watch('./pug/**/*.pug', gulp.series('pug', 'pug2');
    gulp.watch('./scss/**/*.scss', gulp.series());
    
  })
  gulp.watch('./css/*.css').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
  browserSync.reload();
});

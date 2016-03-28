var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 3031
;

gulp.task('browserify', function() {
  gulp.src('./src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(gulp.dest('./dist/js'))
  ;
});

// lauch browser in a port
gulp.task('open', function() {
  var options = {
    url: 'http://localhost:' + port,
  };

  gulp.src('./index.html')
    .pipe(open('', options))
  ;
});

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: './',
    port: port,
    livereload: true
  });
});

// Livereload js
gulp.task('js', function() {
  gulp.src('./dist/**/*.js')
    .pipe(connect.reload())
  ;
});

// Livereload html
gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(connect.reload())
  ;
});

// Watch files for live reload
gulp.task('watch', function() {
  gulp.watch('./dist/js/*.js', ['js']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);
gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);

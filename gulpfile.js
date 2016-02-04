var gulp = require('gulp');
var run = require('gulp-run');
var livereload = require('gulp-livereload');
var electron = require('electron-connect').server.create();


gulp.task('serve', function () {
  livereload.listen();
  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('app.js', electron.restart);

  // Reload renderer process
  // gulp.watch(['index.js', 'index.html'], electron.reload);
  gulp.watch('app/**/*.*', electron.reload);
});

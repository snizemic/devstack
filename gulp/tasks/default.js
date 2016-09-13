var gulp = require('gulp');
var gulpSequence = require('gulp-sequence')

var defaultTask = function(cb) {  
  gulpSequence('clean', 'html', 'css', 'browser-sync', 'watch', cb);
}

gulp.task('default', defaultTask);
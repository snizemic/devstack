var gulp = require('gulp');
var gulpSequence = require('gulp-sequence')

var defaultTask = function(cb) {  
  gulpSequence('clean', 'vendor', 'html', 'css', 'javascript', 'browser-sync', 'watch', cb);
}

gulp.task('default', defaultTask);
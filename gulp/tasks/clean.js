var config = require('../config');
var gulp   = require('gulp');
var del    = require('del');
var path = require('path');

var cleanTask = function (cb) {
  return del([path.join(config.root.dist, '/**/*')]);
}

gulp.task('clean', cleanTask)
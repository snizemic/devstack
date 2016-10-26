'use strict';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence')

var defaultTask = function(cb) {  
  return gulpSequence('clean', 'html', 'css-vendor', 'css', 'js-vendor', 'js', 'images', 'browser-sync', 'watch', cb);
}

module.exports = defaultTask;
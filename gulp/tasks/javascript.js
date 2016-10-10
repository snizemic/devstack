var config = require('../config');

if (!config.tasks.javascript) {
	return;
}

var gulp = require('gulp');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var path = require('path');
var browserSync = require('browser-sync').get('dev-server');


var javascriptTask = function () {
  return browserify({
    entries: path.join(config.root.src, config.tasks.javascript.src, '/script.js'),
    debug: true
  })
		.bundle()
		.pipe(vinylSourceStream('bundle.js'))
		.pipe(vinylBuffer())
		.pipe(gulp.dest(path.join(config.root.dist, config.tasks.javascript.dest)))
		.pipe(browserSync.stream());
};

gulp.task('javascript', javascriptTask);
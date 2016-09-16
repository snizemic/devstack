var config = require('../config');

if (!config.tasks.javascript) {	
	return;
}

var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');
var browserSync = require('browser-sync')

var vendorTask = function(){
	return gulp.src(config.tasks.javascript.vendor)
	.pipe(gulp.dest(path.join(config.root.dist, config.tasks.javascript.dest, '/vendor')));
}

var javascriptTask = function(){
	return gulp.src(path.join(config.root.src, config.tasks.javascript.src, '/**/*.js'))	
	.pipe(concat('script.js'))	
	.pipe(gulp.dest(path.join(config.root.dist, config.tasks.javascript.dest)))
	.pipe(browserSync.stream());
}

gulp.task('vendor', vendorTask);
gulp.task('javascript', javascriptTask);
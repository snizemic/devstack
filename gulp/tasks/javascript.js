'use strict';

var config = require('../config');

if (!config.tasks.javascript) {
	return;
}

var gulp = require('gulp');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var path = require('path');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').get(config.tasks.browserSync.serverName);

//===== Vendor JavaScript Task =====//
var libs = config.tasks.javascript.libs;

var jsVendorTask = function () {
	var bserify = browserify({
		debug: false
	});

	libs.forEach(function (lib) {
		bserify.require(lib);
	});

	return bserify.bundle()
		.pipe(vinylSourceStream(config.tasks.javascript.vendorFile))
		.pipe(vinylBuffer())
		.pipe(util.env.type === 'production' ? uglify() : util.noop())
		.pipe(gulp.dest(path.join(config.root.dist, config.tasks.javascript.dest)));
};

//===== JSHint Task =====//
var jsLintTask = function () {
	return gulp.src(path.join(config.root.src, config.tasks.javascript.src, '/**/*.js'))
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
};

//===== App JavaScript Task =====//
var jsAppTask = function () {
	return browserify({
		entries: path.join(config.root.src, config.tasks.javascript.src, config.tasks.javascript.entryFile),
		debug: true
	})
		.external(libs)
		.bundle()
		.pipe(vinylSourceStream(config.tasks.javascript.entryFile))
		.pipe(vinylBuffer())
		// .pipe(uglify())
		// .on('error', function(err) {
		//  console.error('Error in compress task', err.toString());
		//})		
		.pipe(gulp.dest(path.join(config.root.dist, config.tasks.javascript.dest)))
		.pipe(browserSync.stream());
};

module.exports = {
	jsVendorTask: jsVendorTask,
	jsLintTask: jsLintTask,
	jsAppTask: jsAppTask
}
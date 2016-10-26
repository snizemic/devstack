'use strict';

var config = require('../config');

if (!config.tasks.css) {
	return;
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var browserSync = require('browser-sync').get(config.tasks.browserSync.serverName);

//===== Vendor CSS Task =====//
var cssVendorTaskPaths = [
	config.root.src + '/' + config.tasks.css.src + '/' + config.tasks.css.vendorFolder + '/**/*.scss',
	config.root.src + '/' + config.tasks.css.src + '/' + config.tasks.css.vendorFile
];

var cssVendorTask = function () {
	return gulp.src(cssVendorTaskPaths)
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: config.tasks.css.sass.includePaths
		}))
		.pipe(gulp.dest(path.join(config.root.dist, config.tasks.css.dest)))
		.pipe(browserSync.stream());
};

//===== App CSS Task =====//
var cssTaskPaths = [
	config.root.src + '/' + config.tasks.css.src + '/**/*.scss',	
	'!' + config.root.src + '/' + config.tasks.css.src + '/' + config.tasks.css.vendorFolder + '/**/*.scss',
	'!' + config.root.src + '/' + config.tasks.css.src + '/' + config.tasks.css.vendorFile
];

//console.log(cssTaskPaths);

var cssTask = function () {
	return gulp.src(cssTaskPaths)
		.pipe(sass({
			outputStyle: 'nested'
		}))
		.pipe(gulp.dest(path.join(config.root.dist, config.tasks.css.dest)))
		.pipe(browserSync.stream());
};

module.exports = {
	cssVendorTaskPaths: cssVendorTaskPaths,
	cssVendorTask: cssVendorTask,
	cssTaskPaths: cssTaskPaths,
	cssTask: cssTask
}
'use strict';

var config = require('../config');

var gulp = require('gulp');
var path = require('path');
var cssTaskPaths = require('./css').cssTaskPaths;
var cssVendorTaskPaths = require('./css').cssVendorTaskPaths;

var watchTask = function () {
	gulp.watch(path.join(config.root.src, config.tasks.html.src, '/**/*.html'), ['html']);
	gulp.watch(cssTaskPaths, ['css']);
	gulp.watch(cssVendorTaskPaths, ['css-vendor']);
	gulp.watch(path.join(config.root.src, config.tasks.javascript.src, '/**/*.js'), ['js']);
	gulp.watch(path.join(config.root.src, config.tasks.images.src, '/**/*.+(png|jpg|gif|svg)'), ['images']);	
};

module.exports = watchTask;
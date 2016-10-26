'use strict';

var gulp = require('gulp');

var cleanTask = require('./gulp/tasks/clean');
var browserSyncTask = require('./gulp/tasks/browser-sync');
var htmlTask = require('./gulp/tasks/html');
var cssTask = require('./gulp/tasks/css').cssTask;
var cssVendorTask = require('./gulp/tasks/css').cssVendorTask;
var jsVendorTask = require('./gulp/tasks/javascript').jsVendorTask;
var jsLintTask = require('./gulp/tasks/javascript').jsLintTask;
var jsAppTask = require('./gulp/tasks/javascript').jsAppTask;
var imagesTask = require('./gulp/tasks/images');
var watchTask = require('./gulp/tasks/watch');
var defaultTask = require('./gulp/tasks/default');

gulp.task('clean', cleanTask);
gulp.task('browser-sync', browserSyncTask);
gulp.task('html', htmlTask);
gulp.task('css-vendor', cssVendorTask);
gulp.task('css', cssTask);
gulp.task('js-vendor', jsVendorTask);
gulp.task('js-lint', jsLintTask);
gulp.task('js', ['js-lint'], jsAppTask);
gulp.task('images', imagesTask);
gulp.task('watch', watchTask);
gulp.task('default', defaultTask);
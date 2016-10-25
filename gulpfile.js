'use strict';

var gulp = require('gulp');

var cleanTask = require('./gulp/tasks/clean');
var browserSyncTask = require('./gulp/tasks/browser-sync');
var cssTask = require('./gulp/tasks/css').cssTask;
var cssVendorTask = require('./gulp/tasks/css').cssVendorTask;

gulp.task('clean', cleanTask);
gulp.task('browser-sync', browserSyncTask);
gulp.task('css-vendor', cssVendorTask);
gulp.task('css', cssTask);

require('./gulp/tasks/browser-sync');
require('./gulp/tasks/html');
require('./gulp/tasks/css');
require('./gulp/tasks/javascript');
require('./gulp/tasks/watch');
require('./gulp/tasks/default');
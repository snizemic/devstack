var config = require('../config');

if (!config.tasks.browserSync) {
	return;
}

var gulp = require('gulp');
var browserSync = require('browser-sync').create('dev-server');

var browserSyncTask = function () {
	browserSync.init({
		server: {
			baseDir: config.tasks.browserSync.baseDir
		}
	});
};

gulp.task('browser-sync', browserSyncTask);
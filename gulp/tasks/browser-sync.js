var config = require('../config');

if (!config.tasks.browserSync) {
	return;
}

var gulp = require('gulp');
var browserSync = require('browser-sync').create(config.tasks.browserSync.serverName);

var browserSyncTask = function () {
	return browserSync.init({
		server: {
			baseDir: config.tasks.browserSync.baseDir
		}
	});
};

gulp.task('browser-sync', browserSyncTask);
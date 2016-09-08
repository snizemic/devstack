var config = require('../config');

if(!config.tasks.browserSync){
	return;
}

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: config.tasks.browserSync.baseDir
		}
	});
});
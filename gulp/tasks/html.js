var config = require('../config');

if (!config.tasks.html) {
	return;
}

var gulp = require('gulp');
var browserSync = require('browser-sync')

var htmlTask = function(){
	return gulp.src(config.tasks.html.src)
	.pipe(gulp.dest(config.tasks.html.dest))
	.pipe(browserSync.stream());
}

gulp.task('html', htmlTask);
var config = require('../config');

if (!config.tasks.html) {
	return;
}

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync')

var htmlTask = function(){
	return gulp.src(path.join(config.root.src, config.tasks.html.src, '/**/*.html'))
	.pipe(gulp.dest(config.root.build))
	.pipe(browserSync.stream());
}

gulp.task('html', htmlTask);
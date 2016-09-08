var config = require('../config');

if (!config.tasks.css) {
	return;
}

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync')

var cssTask = function(){
	return gulp.src(config.tasks.css.src)	
	.pipe(sass({
		style: 'expanded'
	}))	
	.pipe(gulp.dest(config.tasks.css.dest))
	.pipe(browserSync.stream());
}

gulp.task('css', cssTask);
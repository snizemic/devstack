var config = require('../config');

if (!config.tasks.css) {	
	return;
}

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var browserSync = require('browser-sync')

var cssTask = function(){
	return gulp.src(path.join(config.root.src, config.tasks.css.src, '/**/*.scss'))	
	.pipe(sass({
		style: 'expanded',
		includePaths : config.tasks.css.sass.includePaths		
	}))	
	.pipe(gulp.dest(path.join(config.root.build, config.tasks.css.dest)))	
	.pipe(browserSync.stream());
}

gulp.task('css', cssTask);
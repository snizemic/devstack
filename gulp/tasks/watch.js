var config = require('../config');

var gulp = require('gulp');
var path = require('path');

var watchTask = function () {
	gulp.watch(path.join(config.root.src, config.tasks.css.src, '/**/*.scss'), ['css']);
	gulp.watch(path.join(config.root.src, config.tasks.html.src, '/**/*.html'), ['html']);
};

gulp.task('watch', watchTask);
var config = require('../config');

var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch(config.tasks.css.src, ['css']);
	gulp.watch(config.tasks.html.src, ['html']);
});
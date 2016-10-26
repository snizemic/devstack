'use strict';

var config = require('../config');

var gulp = require('gulp');
var path = require('path');
var util = require('gulp-util');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').get(config.tasks.browserSync.serverName);

var imagesTask = function () {
    return gulp.src(path.join(config.root.src, config.tasks.images.src, '/**/*.+(png|jpg|gif|svg)'))
        .pipe(util.env.type === 'production' ? imagemin() : util.noop())
        .pipe(gulp.dest(path.join(config.root.dist, config.tasks.images.dest)))
        .pipe(browserSync.stream());
}

module.exports = imagesTask;
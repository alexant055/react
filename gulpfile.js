'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('generate-manifest', function () {
    console.log('manifest file')
    return null;
});

function buildSequence() {
    runSequence('generate-manifest');
}

gulp.task('build-local', function () {
    gutil.env.NODE_ENV = 'local'
    gutil.log(gutil.colors.white.bgBlue('Building... ' + gutil.env.NODE_ENV))
    buildSequence();
})

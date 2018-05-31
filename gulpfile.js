var gulp = require('gulp');
var connect = require('gulp-connect');
var htmlbeautify = require('gulp-html-beautify');
gulp.task('connect', function () {
    connect.server({
        // root: '.',
        livereload: true,
        open: true
    });
});

gulp.task('default', ['connect']);
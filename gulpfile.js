var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({
        browsers: [
            "Android 2.3",
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 8",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6"
        ]
    });

// Styles
gulp.task('styles', function() {
    return gulp.src('assets/less/*.less')
        .pipe(concat('launchpad.css'))
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('public/css/'))
});

// Layouts
gulp.task('layouts', function() {
    return gulp.src('views/*.jade')

// call livereload here because there are no public files to watch.
        .pipe(livereload());
});

// Scripts
// concatenate javascript files
gulp.task('scripts', function() {
    return gulp.src('assets/js/**/*.js')
        .pipe(concat('launchpad.js'))
        .pipe(gulp.dest('public/javascripts'))
});

// Watch
gulp.task('watch', function() {
    gulp.watch(['views/*.jade'], ['layouts']);
    gulp.watch(['assets/less/*.less'], ['styles']);
    gulp.watch(['assets/**/*.js'], ['scripts']);

    // start livereload server.
    livereload.listen();

    // reload when any files change in puplic folder..
    gulp.watch(['public/css/*.css']).on('change', livereload.changed);
    gulp.watch(['public/javascripts/*.js']).on('change', livereload.changed);

});

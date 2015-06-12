// Load Node Modules/Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
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

gulp.task('styles', function() {
    return gulp.src('assets/less/*.less')
        .pipe(concat('launchpad.css'))
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('public/css/'));
});


gulp.task('scripts', function() {
    return gulp.src('assets/**/*.js')
        .pipe(concat('launchpad.js'))
        .pipe(gulp.dest('public/javascripts'))
})


gulp.task('default', ["styles", "scripts"]);
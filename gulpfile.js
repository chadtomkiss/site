var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefix = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

// CSS concat, auto-prefix and minify
gulp.task('sass', function() {
	gulp.src(['./assets/sass/*.scss'])
		.pipe(sass())
		.pipe(autoprefix('last 2 versions'))
		.pipe(gulp.dest('./css/'))
		.pipe(livereload());
});

// default gulp task
gulp.task('default', ['sass'], function() {
	// watch for CSS changes
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
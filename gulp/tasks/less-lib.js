// less
var gulp = require('gulp');
var less = require('gulp-less-sourcemap');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');

gulp.task('less-lib', function () {
	gulp.src([
		'./node_modules/todomvc-common/base.css',
		'./node_modules/todomvc-app-css/index.css',
		'./node_modules/font-awesome/css/font-awesome.css'
	])
	.pipe(concatCss("libs.css"))
	.pipe(minifyCSS({keepBreaks:false}))
	.pipe(gulp.dest('./dist/css/'));
});
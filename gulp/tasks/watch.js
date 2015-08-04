// Watch task
var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch',function () {
	watch('./app/components/**/views/**/*.html', function() {
		gulp.start('templatescache');
	});
	watch(['./app/components/**/*.js'], function() {
		gulp.start(['browserify','docs']);
	});
	watch('./app/images/**/*', function() {
		gulp.start('copy-images');
	});
	watch('./app/components/**/styles/**/*.less', function() {
		gulp.start('styles');
	});
	gulp.watch(['./app/pages/**/*.html'],['copy-pages']);
});
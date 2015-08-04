var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
gulp.task('minifyCSS',function(){
	return gulp.src('./dist/css/**/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css/'));
});
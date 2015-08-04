// Zip to war file
var zip = require('gulp-zip');
var gulp = require('gulp');

gulp.task('zip',['clean-war'],function(){
	return gulp.src('dist/**/*')
		.pipe(zip('dist.war'))
		.pipe(gulp.dest('./war/'));
});

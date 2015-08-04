// Copy images

var gulp = require('gulp');
var del = require('del');

gulp.task('copy-images',function(){
	return gulp.src('./app/images/**/*.{png,jpg,gif}')
			.pipe(gulp.dest('./dist/images/'));

});
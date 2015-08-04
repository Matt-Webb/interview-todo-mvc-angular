// Copy xml file
var gulp = require('gulp');

gulp.task('copy-xml',function(){
	return gulp.src('./web.xml')
		.pipe(gulp.dest('./dist/WEB-INF'));
});
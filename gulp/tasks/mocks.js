// Copy fonts

var gulp = require('gulp');
var del = require('del');

gulp.task('mocks',function() {
	del('dist/mocks', function(err) {
		gulp.src([
			'./app/mocks/**/*'
		])
		.pipe(gulp.dest('./dist/mocks/'));
	});
});
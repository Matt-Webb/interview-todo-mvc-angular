// Copy fonts

var gulp = require('gulp');
var del = require('del');

gulp.task('copy-fonts',function() {
	del('dist/fonts', function(err) {
		gulp.src([
			'./node_modules/font-awesome/fonts/**/*',
			'./node_modules/bootstrap/dist/fonts/**/*'
		])
		.pipe(gulp.dest('./dist/fonts/'));
	});
});
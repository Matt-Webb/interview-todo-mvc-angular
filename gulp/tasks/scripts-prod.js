var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('scripts-prod',function(){
	runSequence(
		'templatescache',
		'browserify',
		'uglify'
	);
});

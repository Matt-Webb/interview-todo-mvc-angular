var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('scripts',function(){
	runSequence(
		'templatescache',
		'browserify'
	);
});

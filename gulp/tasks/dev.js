var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev',function(){
	global.env = 'dev';
	runSequence(
		'clean',
		'templatescache',
		'browserify',
		'copy-pages',
		'copy-fonts',
		'copy-images',
		'mocks',
		'docs',
		'styles',
		'connect',
		'open',
		'watch'
	);
});

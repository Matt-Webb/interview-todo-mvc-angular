var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	global.env = 'prod';
	runSequence(
		'clean',
		'scripts-prod',
		'copy-pages',
		'copy-fonts',
		'copy-images',
		'styles',
		'minifyCSS',
		'copy-xml',
		'test'
	);
});


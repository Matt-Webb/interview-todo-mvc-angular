var karma = require('gulp-karma');
var gulp = require('gulp');

gulp.task('test', function() {

	return gulp.src('./foobar')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err) {
			console.log(err);
			this.emit('end');
			process.exit(2);
			 //instead of erroring the stream, end it
		});
});
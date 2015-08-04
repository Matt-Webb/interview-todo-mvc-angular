var gulp = require('gulp');
var open = require('gulp-open');
gulp.task('open', function(){
	var options = {
		url: 'http://localhost:8000/#/',
		app: 'Google\ Chrome'
	};
	return gulp.src('./dist/index.html')
		.pipe(open('', options));
});
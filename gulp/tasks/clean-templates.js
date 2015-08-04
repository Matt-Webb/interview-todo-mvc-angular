var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
gulp.task('clean-templates',function(){
	return gulp.src('./app/components/**/templates.js')
		.pipe(vinylPaths(del));
});
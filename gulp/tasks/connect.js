var modRewrite = require('connect-modrewrite');
var gulp = require('gulp');
var connect = require('gulp-connect');
var settings = require('../config').modrewrite;

gulp.task('connect', function(){
	connect.server({
		root: './dist',
		port: 8000,
		livereload:true,
		middleware: function() {
			return [
				modRewrite(settings)
			];
		}
	});
});
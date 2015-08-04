var gulp = require('gulp');
var less = require('gulp-less-sourcemap');
var connect = require('gulp-connect');
var handleErrors = require('./handleErrors');
gulp.task('less-pages',function(){
	var debug = false;
	if(global.env && global.env == 'dev'){
		debug = true;
	}
	return gulp.src('./app/pages/**/styles.less')
		.pipe(less({sourceMap: debug,generateSourceMap: debug}))
		.on('error', handleErrors)
		.pipe(gulp.dest('./dist/css/'))
		.pipe(connect.reload());
});
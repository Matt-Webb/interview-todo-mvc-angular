var gulp = require('gulp');
var del = require('del');

gulp.task('clean-war',function(){
	del('war/');
});
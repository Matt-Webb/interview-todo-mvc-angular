var gulp = require('gulp');
var uglify = require('gulp-uglify');
var fs = require("fs");
var path = require("path");
var merge = require('merge-stream');
var scriptsPath = "app/pages";

var uglifyTask = function(page){
	'use strict';
	return gulp.src('./dist/js/'+page+'.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
};
var getFolders = function(dir) {
	'use strict';
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
};

gulp.task('uglify', function() {
	var folders = getFolders(scriptsPath);
	var tasks = folders.map(function(page) {
		return uglifyTask(page);
	});
	return merge(tasks);
});
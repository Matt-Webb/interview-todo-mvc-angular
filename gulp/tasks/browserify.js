var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var fs = require("fs");
var path = require("path");
var merge = require('merge-stream');
var scriptsPath = "app/pages";
var connect = require('gulp-connect');
var handleErrors = require('./handleErrors');
var bundleTask = function(page){
	var debug = false;
	if(global.env && global.env == 'dev'){
		debug = true;
	}
	var bundler = new browserify({debug:debug});
	bundler.add('./app/pages/'+page+'/app.js');
	return bundler
		.bundle(function(){})
		.on('error', handleErrors)
		.pipe(source(page+'.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(connect.reload());
};
var getFolders = function(dir) {
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
};

gulp.task('browserify', function() {
	var folders = getFolders(scriptsPath);
	var tasks = folders.map(function(component) {
		return bundleTask(component);
	});
	return merge(tasks);
});
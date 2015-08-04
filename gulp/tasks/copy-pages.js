// Copy index.html
var gulp = require('gulp');
var fs = require("fs");
var path = require("path");
var merge = require('merge-stream');
var scriptsPath = "app/pages";

function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}
var copyPageTask = function(page){
	var dest = './dist';
	if(page !== 'index'){
		dest += '/'+page;
	}
	return gulp.src('./app/pages/'+page+'/index.html').pipe(gulp.dest(dest));
};

gulp.task('copy-pages',function() {
	var folders = getFolders(scriptsPath);
	var tasks = folders.map(function(page) {
		return copyPageTask(page);
	});
	return merge(tasks);
});
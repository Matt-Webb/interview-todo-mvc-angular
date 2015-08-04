var gulp = require('gulp');
var scriptsPath = "app/components";
var fs = require("fs");
var path = require("path");

var getFolders = function(dir) {
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
};
gulp.task('docs', [], function () {
	var gulpDocs = require('gulp-ngdocs');
	var options = {
		html5Mode: false,
		title: "documentation",
		startPage:'/auth',
		styles:['./gulp/tasks/ngdocs.css']
	};
	var folders = getFolders(scriptsPath);
	var sections = {};
	folders.map(function(component) {
		sections[component] = {
			glob:['app/components/'+component+'/*.js'],
			api: true,
			title: component+' Component'
		};
	});
	return gulpDocs.sections(sections).pipe(gulpDocs.process(options)).pipe(gulp.dest('./dist/docs'));
});
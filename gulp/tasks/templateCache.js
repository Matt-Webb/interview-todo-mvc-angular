// Templates cache module
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var fs = require("fs");
var path = require("path");
var merge = require('merge-stream');
var scriptsPath = "app/components";
var TEMPLATE_HEADER = 'module.exports = angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';
var TEMPLATE_FOOTER = '}]);';

function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function(file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}
var templateTask = function(component){
	return gulp.src('./app/components/'+component+'/**/views/**/*.html')
		.pipe(templateCache('templates.js', {
			root:component,
			module:'templates.'+component,
			standalone:true,
			templateHeader: TEMPLATE_HEADER,
			templateFooter: TEMPLATE_FOOTER
		}))
		.pipe(gulp.dest('./app/components/'+component));

};
gulp.task('templatescache', function (cb) {
	var folders = getFolders(scriptsPath);
	var tasks = folders.map(function(component) {
		return templateTask(component);
	});
	return merge(tasks);
});
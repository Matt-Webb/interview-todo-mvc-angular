// Karma configuration
// Generated on Wed Oct 29 2014 11:32:51 GMT+0000 (GMT)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine','browserify'],


		// list of files / patterns to load in the browser
		files: [
			'app/components/**/spec/**/*.js',
			'app/pages/**/spec/**/*.js'
		],


		// list of files to exclude
		exclude: [
		],

// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/components/**/spec/**/*.js': ['browserify'],
			'app/pages/**/spec/**/*.js': ['browserify']
		},

		browserify: {
			debug: true,
			extensions: ['.js', '.coffee', '.hbs'],
			transform: [ 'browserify-shim', "browserify-ngannotate"]
		},


		// test results reporter  to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		plugins:[
			'karma-jasmine',
			'karma-browserify',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],
		// If browser does not capture in given timeout [ms], kill it
		// CLI --capture-timeout 5000
		captureTimeout: 30000,
		browserNoActivityTimeout: 30000,
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};

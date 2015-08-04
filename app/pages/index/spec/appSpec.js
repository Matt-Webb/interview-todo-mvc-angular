require('../../index/app');
require('angular-mocks');

describe("App Module:", function() {
	var module;
	var deps;

	beforeEach(function() {
		module = angular.module("wh-app");
		deps = module.requires;
	});

	it("should be registered", function() {
		expect(module).toBeDefined();
	});

	describe("Dependencies:", function() {
		var depsToBePresent = [
			'todomvc'
		];
		depsToBePresent.forEach(function(dependency) {
			it("should have " + dependency + " as a dependency", function() {
				expect(deps.indexOf(dependency)).not.toBe(-1);
			})
		});
		it("should not to find a non-load dependency", function() {
			expect(deps.indexOf('IdontExist')).toBe(-1);
		})

	});
});
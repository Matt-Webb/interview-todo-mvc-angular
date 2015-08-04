require('../index');
require('angular-mocks');

describe("Testing the controller:", function() {

	var controller;
	var $rootScope;
	var $scope;
	var todoStorage;

	beforeEach(angular.mock.module("todomvc"));

	beforeEach(angular.mock.inject(function(_$controller_,_$rootScope_,_todoStorage_){
		todoStorage = _todoStorage_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		spyOn(todoStorage,'put').and.callThrough();
        controller = _$controller_('TodoCtrl',{
            '$scope': $scope,
            'todoStorage':todoStorage
        });
    }));

    describe("Testing the scope of the controller:",function(){

    	describe("Testing the addTodo method:",function(){

    		it("Should have addTodo method defined!",function(){
    			expect($scope.hasOwnProperty('addTodo')).toBeTruthy();
    		});

    		it("Should add a new todo object in the todos array of the scope!",function(){
    			var prevLength = $scope.todos.length;
    			var newTodo = "This is a new todo";
    			$scope.newTodo = newTodo;
    			$scope.addTodo();
    			var latestAddedTodo = $scope.todos[$scope.todos.length-1];
    			expect($scope.todos.length).toEqual(prevLength+1);
    			expect(latestAddedTodo).toEqual({title: newTodo,completed: false});
    		});

    		it("Should call the put method of the todoStorage to persist the new todos array in local storage!",function(){
    			var newTodo = "This is a new todo";
    			$scope.newTodo = newTodo;
    			$scope.addTodo();
    			expect(todoStorage.put).toHaveBeenCalledWith($scope.todos);
    		});

    		it("Should increase the remainingCount scope property when called!",function(){
    			var newTodo = "This is a new todo";
    			var prevRemainingCount = $scope.remainingCount;
    			$scope.newTodo = newTodo;
    			$scope.addTodo();
    			expect($scope.remainingCount).toBe(prevRemainingCount + 1);
    		});

    		it("Should reset the newTodo scope property back to a blank string",function(){
    			var newTodo = "This is a new todo";
    			$scope.newTodo = newTodo;
    			$scope.addTodo();
    			expect($scope.newTodo).toBe("");
    		});
    	});
    });
});
var vizApp = angular.module('vizApp', []);

vizApp.controller('VizCtrl', function ($scope) {
	$scope.sayMessage = function() {
		$scope.message = "Hey " + $scope.username + ", Hack The Planet.";
	}


	$scope.persons = [
		{username: 'Vijay', data: 'Hacker'},
		{username: 'Dheeraj', data: 'Driller'},
		{username: 'Kushal', data: 'Neta'},
		{username: 'Ritz', data: 'Gamer'}
	];


	$scope.addPerson = function() {
		var obj = {};
		obj.username = $scope.username;
		$scope.persons.push(obj);
	}
});


vizApp.directive('enter', function() {
	return {
		restrict: "E",
		replace: true,
		template: "<span> Enter Name : </span>"
	}
});


vizApp.filter('toVizCapital', function() {
	return function(input, param) {
		return input.toUpperCase();
	}
});
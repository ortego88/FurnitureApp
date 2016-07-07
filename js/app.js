var app = angular.module('furnitureApp', ['ngRoute']);


app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/viewOne.html', 
			controller: 'viewController'
		})

		.when('/table', {
			templateUrl: 'views/viewTable.html',
			controller: 'ViewChairController'
		})

		.when('/chair', {
			templateUrl: 'views/viewChair.html',
			controller: 'ViewChairController'
		})

		.when('/self', {
			templateUrl: 'views/viewSelf.html',
			controller: 'ViewChairController'
		})

		.when('/allProducts', {
			templateUrl: 'views/viewAllProducts.html',
			controller: 'ViewChairController'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);

app.controller('viewController', ['$scope', function($scope){
angular.element(document).ready(function(){
	$('.slider').slider({full_width: true});
});
}]);

app.controller("ViewChairController", ["$scope","$http", function($scope, $http){
	$http.get("js/furnitureJson.json").success(function(data){
		$scope.furniture = data;
	})
}])

/*app.controller('ViewChairController', ['$scope', function($scope){
	$scope.appTitle = 'Simple Expenses Tracker';
}]);*/

/*

app.controller('NewEditExpenseViewController', ['$scope','$routeParams','$location','Expenses', function ($scope, $routeParams, $location, Expenses){
	$scope.someText = 'The world is mine! The ID is ' + $routeParams.id;
	if(!$routeParams.id) {
		$scope.expense = {date: new Date()}
	}

	$scope.save = function() {
		Expenses.save($scope.expense);
		$location.path('/');
	}
}]);*/


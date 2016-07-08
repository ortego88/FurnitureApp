var app = angular.module('furnitureApp', ['ngRoute']);


app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/slides.html', 
			controller: 'viewController'
		})

		.when('/table', {
			templateUrl: 'views/table.html',
			controller: 'ViewNewController'
		})

		.when('/chair', {
			templateUrl: 'views/chair.html',
			controller: 'ViewNewController'
		})

		.when('/self', {
			templateUrl: 'views/self.html',
			controller: 'ViewNewController'
		})

		.when('/allProducts', {
			templateUrl: 'views/allProducts.html',
			controller: 'ViewNewController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ViewNewController'
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

app.controller("ViewNewController", ["$scope","$http", function($scope, $http){
	$http.get("js/furnitureJson.json").success(function(data){
		$scope.furniture = data;
	})
}])

app.controller("search", ["$scope", function($scope) {
    $scope.furniture}]);
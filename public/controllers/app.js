// Export the controller
var myApp = angular.module('myApp', []);

// wrapper Routes for API
myApp.controller('appCtrl', function appCtrl($scope, $http) {
	$scope.formData = {};

	$http.get('/questions')
		.success(function(data) {
			$scope.models = data.models;
			$scope.applauseCount =  data.applauseCount;
			console.log(data);
		})
		.error(function(data) {
			console.log("Error: " + data);
		});

	$scope.createModel = function() {
		$http.post('/questions', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.models = data;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};

	$scope.deleteModel = function(id) {
		$http.delete('/questions/' + id)
			.success(function(data) {
				$scope.models = data;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};

	$scope.createApplause = function() {
		$http.post('/applause', $scope.formData)
			.success(function(data) {
				$scope.applauseCount =  data.applauseCount;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};
});

app.controller("showDetailsController", function($scope, $http, $stateParams,$rootScope,){
	$scope.isError = false;
	$scope.paramId =  $stateParams.id
	$rootScope.isHomepage = false;
	$http({

		method: 'GET',
		url: 'https://api.tvmaze.com/shows/'+$scope.paramId,
				
		}).then(function success(response) {
			$scope.singleShowDetails = response.data;
		// this function will be called when the request is success
		
		}, function error(response) {
			console.log("one show error ==>",response.data);
			$scope.isError = true;
		// this function will be called when the request returned error status
		});
	});
	
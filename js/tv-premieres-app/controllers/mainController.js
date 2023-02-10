app.controller("mainController", function($scope, $http, $rootScope,){
	$scope.count = 1;
	
	$scope.init = function() {
		
		$rootScope.isHomepage = true;
		$http({
			method: 'GET',
			url: 'https://api.tvmaze.com/shows?page=1',
					
			}).then(function success(response) {
				$scope.results = response.data;
				$scope.allShows = [];
				$scope.comedyShow = [];
				$scope.actionShow = [];
				$scope.adventureShow = [];
				$scope.availableGenres = [];
				$scope.isError = false;
				for(let i=0; i<response.data.length; i++)
				{
				//if(response.data[i].image!=null)
						$scope.allShows.push(response.data[i]);
				}
				for(let i=0; i<response.data.length; i++)
				{
					if(response.data[i].genres.includes("Comedy") && response.data[i].image!=null)
					//if(response.data[i]._embedded.show.genres.includes("Comedy"))
						$scope.comedyShow.push(response.data[i]);
				}
				for(let i=0; i<response.data.length; i++)
				{
					if(response.data[i].genres.includes("Action") && response.data[i].image!=null)
					$scope.actionShow.push(response.data[i]);
				}
				for(let i=0; i<response.data.length; i++)
				{
					if(response.data[i].genres.includes("Adventure") && response.data[i].image!=null)
					$scope.adventureShow.push(response.data[i]);
				}
				for(let i=0; i<response.data.length; i++)
				{
				// Loop through each genre of this episode
				angular.forEach(response.data[i].genres, function(genre, index){
					// Only add to the availablegenres array if it does not exist
					if(genre){
						var exists = false;
						angular.forEach($scope.availableGenres, function(avGenre, index){
							if(avGenre == genre){
								exists = true;
							}
						});
		
						if(exists == false){
							$scope.availableGenres.push(genre);
						}
					}
					
				});
			}		
			}, function error(response) {
				$scope.isError = true;
			});
		};
	});
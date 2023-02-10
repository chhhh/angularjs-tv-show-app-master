var app = angular.module('TVShow',["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider)   
{   
  $stateProvider
  .state('Home', {
    url: '/home',
    templateUrl: "main.html",
    controller: "mainController"
});
    $stateProvider.state('showDetails',   
{   
            url : '/showDetails/:id',   
            templateUrl : "showDetails.htm",   
            controller : "showDetailsController" 
        })

        $urlRouterProvider.otherwise("/home");
}); 


app.directive('backButton', function(){
  return {
    restrict: 'A',

    link: function(scope, element, attrs) {
      element.bind('click', goBack);

      function goBack() {
        history.back();
        scope.$apply();
      }
    }
  }
});
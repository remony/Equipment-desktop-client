'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dash', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  function updateIndicator() {
    if(navigator.onLine) { // true|false
	       $scope.status = true;
    } else {
      $scope.status = false;
    }
  	// Show a different icon based on offline/online
  }

// Update the online status icon based on connectivity
window.addEventListener('online',  updateIndicator);
window.addEventListener('offline', updateIndicator);
updateIndicator();
}]);

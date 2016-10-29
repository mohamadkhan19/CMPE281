window.App = angular.module('cloudApp', []);

App.run(['$window', '$rootScope', function($window, $rootScope) {
  $rootScope.online = navigator.onLine;
  $window.addEventListener('offline', function () {
    $rootScope.$apply(function() {
      $rootScope.online = false;
    });
  }, false);
  $window.addEventListener('online', function () {
    $rootScope.$apply(function() {
      $rootScope.online = true;
    });
  }, false);
}]);
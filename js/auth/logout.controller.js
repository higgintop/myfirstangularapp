
angular
  .module('tas')
  .controller('LogoutController', LogoutController)

function LogoutController($rootScope, $scope, $location, authFactory) {
  authFactory.logout(function(){
  	$rootScope.user = null;
    $location.path('/login');
    $scope.$apply();
  });
}

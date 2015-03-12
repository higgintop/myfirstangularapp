angular
  .module('tas')
  .config(authConfig)
  .run(privateRoutes);

function authConfig($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'js/auth/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
      resolve: {
        // if go to login and already logged in -> redirect to /tas
        data: function($location, authFactory) {
          if(authFactory.isLoggedIn()){
            $location.path('/tas');
          }
        }
      }
    })
    .when('/logout', {
      template: '',
      controller: 'LogoutController'
    });
}

// root scope = global obj of angular
function privateRoutes($rootScope, $location, authFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute){
    // before route changes, make sure there is a global user
    $rootScope.user = authFactory.getAuth();

    // if nextRoute is private and we are not logged in
    if(nextRoute.$$route && nextRoute.$$route.private && !authFactory.isLoggedIn()) {
      // redirect to login
      $location.path('/login');
    }

  });
}

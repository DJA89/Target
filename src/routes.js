
export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/sign_up');

  $stateProvider
    .state('landing', {
      abstract: true,
      templateUrl: 'app/layout/landing.html'
    })
    .state('landing.sign_in', {
      url: '/',
      controller: 'SignInCtrl',
      templateUrl: 'app/sign_in/sign_in.html',
      controllerAs: 'SignInCtrl'
    })
    .state('landing.sign_up', {
      url: '/sign_up',
      controller: 'SignUpCtrl',
      templateUrl: 'app/sign_up/sign_up.html',
      controllerAs: 'signUpCtrl'
    })
    .state('landing.inside_home', {
      url: '/map',
      controller: 'MapHomeCtrl',
      templateUrl: 'app/map_home/map_home.html',
      controllerAs: 'mapHomeCtrl'
    });
}

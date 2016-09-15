export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/'
      // controller: 'hello',
      // templateUrl: 'app/hello.html',
      // controllerAs: 'helloCtrl'
    });
}
angular_review
  .module('my_costco_list', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/lists',
      controllerAs: 'listsIndexCrtl',
      contoller: 'ListsIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/lists-show',
      contollerAs: 'listsShowCrtl',
      controller: 'ListsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

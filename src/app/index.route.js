(function() {
  'use strict';

  angular
    .module('resolveExample')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        // resolving a person in this base state makes a reference available
        // to be injected into any of the child states
        resolve: {
          person: function(PersonService) {
            return PersonService.get();
          }
        }
      })
      .state('main.firstName', {
        url: 'firstName',
        templateUrl: 'app/firstName/firstName.html',
        controller: 'FirstNameController',
        controllerAs: 'firstName'
      })
      .state('main.lastName', {
        url: 'lastName',
        templateUrl: 'app/lastName/lastName.html',
        controller: 'LastNameController',
        controllerAs: 'lastName'
      })
      .state('main.fullName', {
        url: 'fullName',
        templateUrl: 'app/fullName/fullName.html',
        controller: 'FullNameController',
        controllerAs: 'fullName',
        resolve: {
          // override the person resolve from the main state
          person: function(PersonService, person) {
            return PersonService.save(person);
          }
        }
      });

    $urlRouterProvider.otherwise('/firstName');
  }

})();

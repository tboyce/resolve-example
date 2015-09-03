(function () {
  'use strict';

  angular
    .module('resolveExample')
    .service('PersonService', PersonService);

  // a fake service, this could be a real web service instead
  /** @ngInject */
  function PersonService($q) {
    var person = {
      personName: {first: 'John', last: 'Doe'}
    };

    return {
      get: function () {
        return $q.when(person);
      },
      save: function (updatedPerson) {
        // copy so that the original reference is unmodified
        person = angular.copy(updatedPerson);
        // derive a full name
        person.personName.full = [person.personName.first, person.personName.last].join(' ');
        return $q.when(person);
      }
    };
  }
})();

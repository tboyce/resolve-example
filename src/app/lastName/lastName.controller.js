(function() {
  'use strict';

  angular
    .module('resolveExample')
    .controller('LastNameController', LastNameController);

  /** @ngInject */
  function LastNameController(person) {
    var vm = this;

    vm.person = person;
  }
})();

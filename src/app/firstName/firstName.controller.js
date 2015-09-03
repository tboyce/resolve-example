(function() {
  'use strict';

  angular
    .module('resolveExample')
    .controller('FirstNameController', FirstNameController);

  /** @ngInject */
  function FirstNameController(person) {
    var vm = this;

    vm.person = person;
  }
})();

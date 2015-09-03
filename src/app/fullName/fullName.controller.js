(function() {
  'use strict';

  angular
    .module('resolveExample')
    .controller('FullNameController', FullNameController);

  /** @ngInject */
  function FullNameController(person) {
    var vm = this;

    vm.person = person;
  }
})();

(function() {
  'use strict';

  angular
    .module('resolveExample')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(person) {
    var vm = this;

    vm.person = person;
  }
})();

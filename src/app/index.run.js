(function() {
  'use strict';

  angular
    .module('resolveExample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

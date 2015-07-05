(function() {
  'use strict';
  angular
    .module('eAngular.Core')
    .factory('errorHttpInterceptor', [
      '$q', '$rootScope',
      function($q, $rootScope) {
        return {
          responseError: function responseError(rejection) {
            $rootScope.loadingSpinner = false;
            return $q.reject(rejection);
          }
        };
      }
    ]).config(['$httpProvider',
      function($httpProvider) {
        $httpProvider.interceptors.push('errorHttpInterceptor');
      }
    ]);
})();
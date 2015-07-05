'use strict';

angular.module('eAngular.Account')
  .controller('ActivationController', [
  	'$rootScope', '$scope','$stateParams','$state', 'Auth', 'Spinner', 'layoutService',
    function($rootScope, $scope, $stateParams, $state, Auth, Spinner, layoutService) {
      Auth.activateAccount({
        key: $stateParams.key
      }).then(function() {
        $scope.error = null;
        $scope.success = 'OK';
      }).catch(function() {
        $scope.success = null;
        $scope.error = 'ERROR';
      });
    }
  ]);
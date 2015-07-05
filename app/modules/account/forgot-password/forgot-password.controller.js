'use strict';

angular.module('eAngular.Account')
  .controller('ForgotPasswordController', [
    '$rootScope', '$scope', '$state', 'Auth',  'Spinner','layoutService',
    function($rootScope, $scope, $state, Auth, Spinner,layoutService) {
      $scope.errors = {};
      $rootScope.showSidebar = false;
      $scope.isError = false;
      $scope.isSuccess = false;
      $scope.forgotPass= function() {
        Spinner.show();
        Auth.forgotPassword({
          loginOrEmail: $scope.loginOrEmail
        }).then(function(response) {
            Spinner.hide();
            $scope.isSuccess = true;
        }).catch(function(response) {
          Spinner.hide();
          if (response.status === 400) {
            $scope.isError = true;
            $scope.errorMessage = response.data;
          }

        });
      };
    }
  ]);
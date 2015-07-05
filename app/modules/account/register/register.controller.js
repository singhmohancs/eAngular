'use strict';

angular.module('eAngular.Account')
  .controller('RegisterController', function($rootScope, $scope, $translate, $timeout, Spinner, Auth) {
    $scope.success = null;
    $scope.error = null;
    $scope.doNotMatch = null;
    $scope.errorUserExists = null;
    $scope.registerAccount = {};
    $rootScope.showSidebar = false;
    $timeout(function() {
      angular.element('[ng-model="registerAccount.clientName"]').focus();
    });

    $scope.register = function() {
      if ($scope.registerAccount.password !== $scope.registerAccount.confirmPassword) {
        $scope.doNotMatch = 'ERROR';
      } else {
        Spinner.show();
        $scope.registerAccount.langKey = $translate.use();
        $scope.doNotMatch = null;
        $scope.error = null;
        $scope.errorUserExists = null;
        $scope.errorEmailExists = null;
        $scope.errorCompanyNameExists = null;
        Auth.createAccount($scope.registerAccount).then(function(response) {
          $scope.success = response;
          Spinner.hide();
        }).catch(function(response) {
          $scope.success = null;
          if (response.status === 400 && response.data == 'Login already in use') {
            $scope.errorUserExists = 'ERROR';
          } else if (response.status === 400 && response.data == 'E-mail address already in use') {
            $scope.errorEmailExists = 'ERROR';
          } else if (response.status === 400 && response.data == 'Client with same name already exist') {
            $scope.errorCompanyNameExists = 'ERROR';
          } else {
            $scope.error = 'ERROR';
          }
          Spinner.hide();
        });
      }
    };
  });
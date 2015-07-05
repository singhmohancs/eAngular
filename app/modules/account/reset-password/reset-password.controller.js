'use strict';

angular.module('eAngular.Account')
  .controller('ResetPasswordController', [
    '$rootScope', '$scope', '$state', 'Auth','Spinner','layoutService',
    function($rootScope, $scope, $state, Auth,Spinner,layoutService) {
      $scope.errors = {};
      $scope.invalidtoken = false;
      $scope.validToken = false;
      $scope.changePasswordError = false;
      $scope.changePasswordSuccess = false;
      $rootScope.showSidebar = false;
      var token = $state.params.token;
      /**
        * Validate Access Token
        * param: @token
        * return: True or False
        * author: Kiran Kumar[k.kiran305@gmail.com]
      */
       Auth.validateToken({
          token: token
        }).then(function(data) {
          if(data.status==200 || data.status==201 || data.status==202){
            $scope.validToken = true;
            $scope.invalidtoken = false;
          }else{
            $scope.validToken = false;
            $scope.invalidtoken = true;
          }
        }).catch(function(err) {
          $scope.validToken = false;
          $scope.invalidtoken = true;
        });

      /**
        * Reset User Password
        * param: @token,new password
        * return: True or False
        * author: Kiran Kumar[k.kiran305@gmail.com]
      */
      $scope.resetPassword= function() {
        Spinner.show();
        Auth.resetPassword({
          password: $scope.newpassword,
          token:token
        }).then(function(data) {
          if(data.status==200 || data.status==201 || data.status==202){
            $scope.changePasswordSuccess = true;
            $scope.invalidtoken = false;
            $scope.validToken = true;
          }else{
            $scope.changePasswordSuccess = false;
            $scope.invalidtoken = true;
            $scope.validToken = false;
          }
           Spinner.hide();
        }).catch(function(data) {
          $scope.changePasswordSuccess = false;
          $scope.invalidtoken = true;
          $scope.validToken = false;
          Spinner.hide();
        });
      };

    }
  ]);
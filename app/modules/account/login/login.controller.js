'use strict';

angular.module('eAngular.Account')
  .controller('LoginController', [
    '$rootScope', '$scope', '$state', 'Auth', 'notify', 'Principal', '$timeout','Spinner','layoutService',
    function($rootScope, $scope, $state, Auth, notify, Principal, $timeout,Spinner,layoutService) {
      $scope.forgotPassword = false;
      $scope.user = {};
      $scope.errors = {};
      $rootScope.showSidebar = false;
      $scope.rememberMe = true;
      $timeout(function() {
        angular.element('[ng-model="username"]').focus();
      });
      $scope.login = function() {
        Spinner.show();
        Auth.login({
          username: $scope.username,
          password: $scope.password,
          rememberMe: $scope.rememberMe
        }).then(function(data) {
          $scope.authenticationError = false;
          $rootScope.showSidebar = true;
          $state.go('home');
        }).catch(function() {
          $scope.authenticationError = true;
        });
      };


      /**
       * [showForgotPassword description]
       * @method showForgotPassword
       * @param  {[type]}           $event [description]
       * @return {[type]}                  [description]
       */
      $scope.showForgotPassword = function($event) {
        $event.preventDefault();
        $scope.forgotPassword = true;
      };

      $scope.showSignIn = function($event) {
        $event.preventDefault();
        $scope.forgotPassword = false;
      };
    }
  ]);
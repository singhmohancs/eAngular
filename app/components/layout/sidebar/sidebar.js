'use strict';
angular
  .module('eAngular.Layout')
  .controller('SidebarController', ['$scope', '$state', 'Principal', 'Logger',
    function($scope, $state, Principal, Logger) {
      var logger;
      $scope.selectedMenu = 'dashboard';
      $scope.collapseVar = 0;
      $scope.multiCollapseVar = 0;
      $scope.profilePic = '';
      $scope.roleWorker = true;
      init();

      function init() {
        setLogger();
      }

      function setLogger() {
        logger = Logger.getInstance('SidebarController');
        logger.info('Controller has initialized');
      }

      $scope.check = function(x) {

        if (x == $scope.collapseVar)
          $scope.collapseVar = 0;
        else
          $scope.collapseVar = x;
      };

      $scope.multiCheck = function(y) {

        if (y == $scope.multiCollapseVar)
          $scope.multiCollapseVar = 0;
        else
          $scope.multiCollapseVar = y;
      };

      Principal.identity(true).then(function(data) {
        $scope.isInAnyRole = Principal.isInAnyRole(['ROLE_CLIENTADMIN', 'ROLE_MANAGER']);
        $scope.roleAdmin = Principal.isInAnyRole(['ROLE_ADMIN']);
        $scope.roleClientAdmin = Principal.isInAnyRole(['ROLE_CLIENTADMIN']);
        $scope.roleWorker = Principal.isInAnyRole(['ROLE_WORKER']);
        $scope.user = data;
        $scope.profilePic = (data.profilePictureUrl !== '') ? data.profilePictureUrl : 'img/avatar.png'
      });
    }
  ])
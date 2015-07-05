'use strict';

angular
  .module('eAngular.Layout')
  .controller('LayoutController', ['$scope', 'layoutService', 'Logger', '$rootScope', 'Idle','Title', '$modal', 'Auth', '$state',
    function($scope, layoutService, Logger, $rootScope, Idle, Title, $modal, Auth, $state){

      var logger;
      $rootScope.showChat = false;
      init();

      function init() {
        setLogger();
        setSidebar();
      }

      function setLogger() {
        logger = Logger.getInstance('LayoutController');
        logger.info('Controller has initialized');
      }

      function setSidebar() {
        $rootScope.showSidebar = layoutService.getSidebar;
        logger.info('Sidebar status is :: {0}', [$scope.showSidebar ? 'enabled' : 'Disabled']);
      }

      $scope.$on('IdleStart', function() {
        // the user appears to have gone idle
         console.warn('idle start');
         if ($state.current.name === 'account.login' || $state.current.name === 'account.register' || $state.current.name === 'account.forgotpassword' || $state.current.name === 'account.resetpassword'){
          Title.restore();
          return;
        }
      });

      $scope.$on('IdleWarn', function(e, countdown) {
        console.warn('warning log');
         if ($state.current.name === 'account.login' || $state.current.name === 'account.register' || $state.current.name === 'account.forgotpassword' || $state.current.name === 'account.resetpassword'){
          Title.restore();
          return;
        }
      });

      $scope.$on('IdleTimeout', function() {
        if ($state.current.name === 'account.login' || $state.current.name === 'account.register' || $state.current.name === 'account.forgotpassword' || $state.current.name === 'account.resetpassword'){
          Title.restore();
          return;
        }
        //Auth.logout();
        $modal.open({
          templateUrl: 'components/layout/idle-modal/idle-modal.html',
          controller: 'IdleModalController'
        });
      });

      $scope.$on('IdleEnd', function() {
        console.info('IdleEnd:: IdleEnd log');
      });

      $scope.$on('Keepalive', function() {
        console.info('IdleEnd:: Keepalive log');
      });
    }
  ]);
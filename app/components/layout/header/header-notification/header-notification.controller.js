(function() {
  'use strict';
  /**
   * @ngdoc Controller
   * @name eAngular.Layout.Controller.HeaderNotificationController
   * @module eAngular.Layout
   *
   * @description
   * Responsible for all notifications
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Layout')
    .controller('HeaderNotificationController', HeaderNotificationController);

  /* @ngInject */
  function HeaderNotificationController($scope, Auth, $state) {
    var logger;
    /**
     * [setLogger description]
     * @method setLogger
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     */
    function setLogger() {
      logger = Logger.getInstance('HeaderNotificationController');
      logger.info('Controller has initialized');
    }

    $('#logout-action').on('click', function() {
      console.log('logout');
      Auth.logout();
    });

    $scope.goToTaskDetails = function($event, notification) {
      $event.preventDefault();
      $state.go('job.detail', {
        'job_id': notification.job.id,
        'task_id': notification.task.id
      });
    }

  }
})();
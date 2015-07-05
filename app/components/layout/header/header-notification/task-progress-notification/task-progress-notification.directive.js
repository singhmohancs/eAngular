(function() {
  'use strict';
  /**
   * @ngdoc Directive
   * @name eAngular.Layout.Directive.taskProgessNotifications
   * @module eAngular.Layout
   *
   * @description
   * Responsible for Task Progess Notifications
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Layout')
    .directive('taskProgessNotifications', TaskProgessNotifications);

  /* @ngInject */
  function TaskProgessNotifications(NotificationModel, $interval, APP_CONFIG, notify, Spinner,$timeout) {
    return {
      templateUrl: 'components/layout/header/header-notification/task-progress-notification/task-progress-notification.html',
      restrict: 'A',
      scope:true,
      link: function($scope, $event, $attr) {

        /**
         * Notification interval event handler
         */
        var _notificationInterval,logger;
        /**
         * user notification list
         * @True {[type]}
         */
        $scope.taskProgessNotifications = NotificationModel.taskProgessNotifications;
        /**
         * default pagination page
         * @True {number}
         */
        $scope.page = 1;
        /**
         * [length description]
         * @True {number}
         */
        NotificationModel.taskProgessNotifications.length = 0;
        /**
         * Invoke function on load
         */
        init();

        function init() {
          getNotifications();
        }

        _notificationInterval = $interval(function() {
           if (!$scope.pauseTimer){
            NotificationModel.taskProgessNotifications.length = 0;
            getNotifications();
          }
        }, APP_CONFIG.notificationInterval);

        function destroyInterval() {
          if (angular.isDefined(_notificationInterval)) {
            $interval.cancel(_notificationInterval);
            _notificationInterval = undefined;
          }
        }

        $scope.$on('$destroy', function() {
          destroyInterval();
        });
        $scope.$on('IdleTimeout', function() {
          destroyInterval();
        });

        function failCallbacks(error) {
          console.error(error);
        }

        $scope.dismissAlert = function($event, alert, notificationType) {
          $event.preventDefault();
          $event.stopPropagation();
          var requestResource = null;
          if (notificationType && ('userNotification' === notificationType)) {
            requestResource = NotificationModel.dismissUserNotification({
              'id': alert.id
            });
          } else {
            requestResource = NotificationModel.dismissAlert({
              'id': alert.id
            });
          }

          requestResource.then(function(response) {
            notify.success({
              title: 'Success',
              message: 'Marked as read successfully'
            });
          }, failCallbacks)
        };


        /**
         * [loadMore description]
         * @method loadMore
         * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
         * @param  {[type]} $event [description]
         * @return {[type]}        [description]
         */
        $scope.loadMore = function($event, type) {
          $event.preventDefault();
          $scope.pauseTimer = true;
          $scope.page = $scope.page + 1;
          getNotifications();
          activateTimer();
        };

        function activateTimer(){
          var _timeOut;
          if(_timeOut) _timeOut.cancel();

          _timeOut = $timeout(function(){
             $scope.pauseTimer = false;
          },60000);
        }

        /**
         * [getNotifications description]
         * @method getNotifications
         * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
         * @return {[type]}              [description]
         */
        function getNotifications() {
          var _params = {
            'page': $scope.page,
            'per_page': ($scope.page > 1) ? APP_CONFIG.pagination.nav_message_load_more : APP_CONFIG.pagination.nav_message
          };
          NotificationModel.findTaskProgessNotifications(_params, function(result, headers) {
            $scope.notificationTotalCount = headers('x-total-count');
            for (var i = 0; i < result.length; i++) {
              NotificationModel.taskProgessNotifications.push(result[i]);
            }

          }, errorhandler);
        };
        /**
         * [isLoadMore description]
         * @method isLoadMore
         * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
         * @return {Boolean}  [description]
         */
        $scope.isLoadMore = function() {
          return ($scope.notificationTotalCount > $scope.taskProgessNotifications.length) ? true : false;
        }


        /**
         * [errorhandler description]
         * @method errorhandler
         * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
         * @param  {[type]}     err [description]
         * @return {[type]}         [description]
         */
        function errorhandler(err) {
          notify.error({
            title: 'Error',
            message: err.statusText
          });
        }

      }
    };
  }


})();
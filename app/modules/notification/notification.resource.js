(function() {
  'use strict';
  /**
   * @ngdoc Factory
   * @name eAngular.Notification.Factory.NotificationResource
   * @module eAngular.Notification
   *
   * @description
   * Implements CURD operations
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Notification')
    .factory('NotificationResource', NotificationResource);

  /* @ngInject */
  function NotificationResource($resource, APP_CONFIG) {
    /* $resource(API_URL, DEFAULT_PARAMETERS, CONFIGURE_YOUR_CUSTOM_METHODS)*/
    return $resource('api/notifications/:request_action/:request_action_type/:job_id/:task_id/:user_id', {
      request_action: "@request_action",
    }, {
      findAll: {
        method: "GET",
        params: {},
        isArray: true
      },
      findAllByJob: {
        method: "GET",
        params: {
          request_action: "job",
          job_id: "@job_id",
        }
      },
      findAllByTask: {
        method: "GET",
        params: {
          request_action: "task",
          task_id: "@task_id",
        }
      },
      subscribeOnJob: {
        method: "POST",
        params: {
          requestType: "subscribe",
          request_action_type: 'job',
        }
      },
      subscribeOnTask: {
        method: "POST",
        params: {
          requestType: "subscribe",
          request_action_type: 'task',
        }
      },
      unSubscribeOnJob: {
        method: "PUT",
        params: {
          requestType: "unsubscribe",
          request_action_type: 'job',
        }
      },
      unSubscribeOnTask: {
        method: "PUT",
        params: {
          requestType: "subscribe",
          request_action_type: 'task',
        }
      },
      findUserNotifications: {
        method: "GET",
        url: 'api/usernotifications',
        isArray: true
      },
      findTaskAssignmentNotifications: {
        method: "GET",
        url: 'api/alerts/taskAssignments',
        isArray: true
      },
      findTaskProgessNotifications: {
        method: "GET",
        url: 'api/alerts/taskProgess',
        isArray: true
      },
      dismissAlert: {
        method: "POST",
        url: 'api/alerts/dismiss/:alert_id',
        params: {
          alert_id: "@id"
        }
      },
      dismissUserNotification: {
        method: "POST",
        url: 'api/usernotifications/dismiss/:notification_id',
        params: {
          notification_id: "@id"
        }
      }


    });
  }
})();
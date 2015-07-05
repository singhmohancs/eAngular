(function() {
  'use strict';
  /**
   * @ngdoc Service
   * @name eAngular.Service.Notification
   * @module eAngular.Notification
   *
   * @description
   *
   * Data model for jobtask module
   * Implemenets CURD operation
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Notification')
    .service('NotificationModel', NotificationModel);

  /* @ngInject */
  function NotificationModel(NotificationResource) {
    var model = this;
    /**
     * [jobList description]
     * @True {Array}
     */
    model.notifications = [];
    /**
     * [taskAssignmentNotifications description]
     * @True {Array}
     */
    model.taskAssignmentNotifications = [];
    /**
     * [userNotifications description]
     * @True {Array}
     */
    model.userNotifications = [];
    /**
     * [taskProgessNotifications description]
     * @True {Array}
     */
    model.taskProgessNotifications = [];
    /**
     * [findAll description]
     * @method findAll
     * @return {[type]} [description]
     */
    model.findAll = function(params) {
      return NotificationResource.findAll(params).$promise;
    };
    /**
     * [findUserNotifications description]
     * @method findUserNotifications
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}              params [description]
     * @return {[type]}                     [description]
     */
    model.findUserNotifications = function(params, success, fail) {
      return NotificationResource.findUserNotifications(params, success, fail);
    };
    /**
     * [findTaskAssignmentNotifications description]
     * @method findTaskAssignmentNotifications
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}                        params [description]
     * @return {[type]}                               [description]
     */
    model.findTaskAssignmentNotifications = function(params, success, fail) {
      return NotificationResource.findTaskAssignmentNotifications(params,success, fail);
    };
    /**
     * [findTaskProgessNotifications description]
     * @method findTaskProgessNotifications
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}                     params [description]
     * @return {[type]}                            [description]
     */
    model.findTaskProgessNotifications = function(params, success, fail) {
      return NotificationResource.findTaskProgessNotifications(params,success, fail);
    };

    /**
     * [dismissAlert description]
     * @method dismissAlert
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}     params [description]
     * @return {[type]}            [description]
     */
    model.dismissAlert = function(params) {
      return NotificationResource.dismissAlert(params).$promise;
    };
    /**
     * [dismissUserNotification description]
     * @method dismissUserNotification
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}                params [description]
     * @return {[type]}                       [description]
     */
    model.dismissUserNotification = function(params) {
      return NotificationResource.dismissUserNotification(params).$promise;
    };
  }
})();
(function() {
  'use strict';
  /**
   * @ngdoc Directive
   * @name eAngular.Layout.Directive.HeaderNotificationDirective
   * @module eAngular.Layout
   *
   * @description
   * Responsible for all Notifications
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Layout')
    .directive('headerNotification', HeaderNotificationDirective);

  /* @ngInject */
  function HeaderNotificationDirective() {
    return {
      restrict: 'E',
      replace: true,
      controller : 'HeaderNotificationController',
      templateUrl: 'components/layout/header/header-notification/header-notification.html',
    };
  };
})();
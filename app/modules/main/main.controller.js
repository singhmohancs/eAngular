(function() {
  'use strict';
  /**
   * @ngdoc Controller
   * @name eAngular.main.Controller.MainController
   * @module eAngular.main
   *
   * @description
   * Landing dashboard page controller
   * Responsible for all view states
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular')
    .controller('MainController', MainController);

  /* @ngInject */
  function MainController($scope, $modal, Logger, layoutService, notify, Spinner, $window, utilFactory, APP_CONFIG, $state) {

  }
})();
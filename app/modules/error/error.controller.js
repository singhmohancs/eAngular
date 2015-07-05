(function() {
  'use strict';
  /**
   * @ngdoc Controller
   * @name eAngular.Controller.ErrorController
   * @module eAngular
   *
   * @description
   * Error controller to hanlde errors
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular')
    .controller('ErrorController', ErrorController);
  /* @ngInject */
  function ErrorController($scope,Spinner, $state) {
    Spinner.hide();

}
})();
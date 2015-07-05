  'use strict';
  /**
   * @ngdoc Controller
   * @name eAngular.Layout.Controller.HeaderController
   * @module eAngular.Layout
   *
   * @description
   * HeaderController  application header controller
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Layout')
    .controller('HeaderController', HeaderController);
  /* @ngInject */
  function HeaderController($scope, Auth, Principal, $state) {
    /**
     * [isAuthenticated description]
     * @True {Boolean}
     */
    $scope.isAuthenticated = Principal.isAuthenticated;
    /**
     * [isInRole description]
     * @True {Boolean}
     */
    $scope.isInRole = Principal.isInRole;
    /**
     * [$state description]
     * @True {[type]}
     */
    $scope.$state = $state;
    /**
     * [logout description]
     * @method logout
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]} $event [description]
     * @return {[type]}        [description]
     */
    $scope.logout = function($event) {
      $event.preventDefault();

      Auth.logout();
      $state.go('account.login');
    };

    /**
     * [description]
     * @method
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]} data) {                 $scope.roleClientAdmin [description]
     * @return {[type]}       [description]
     */
    Principal.identity(true).then(function(data) {
      $scope.roleClientAdmin = Principal.isInAnyRole(['ROLE_CLIENTADMIN']);
    });
  }
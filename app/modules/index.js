(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name eAngular
   *
   * @module eAngular
   *
   * @description
   * Configuartion while provider are created
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular.module('eAngular', [
    /*
     * Order is not important. Angular makes a
     * pass to register all of the modules listed
     */

    /*
     * Everybody has access to these.
     * We could place these under every feature area,
     * but this is easier to maintain.
     */
    'eAngular.Core',
    'eAngular.Layout',
    'eAngular.Widgets',
    'eAngular.Account',
    'eAngular.Dashboard',
    'eAngular.Notification',
    'eAngular.Pages'
  ]);
})();
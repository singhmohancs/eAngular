(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Pages.HelpStateConfig
   * @module eAngular.Pages
   *
   * @description
   * Static page states
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Pages')
    .config(HelpStateConfig);

  /* @ngInject */
  function HelpStateConfig($stateProvider) {
    $stateProvider
      .state('page.help', {
        url: '/help',
        data: {
          roles: [],
          pageTitle: '$Mart DMS - Contact Support'
        },
        views: {
          'page-content': {
            templateUrl: 'modules/pages/help/help.html',
            controller: 'HelpController'
          }
        }
      });
  }
})();
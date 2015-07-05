(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Pages.PrivacyPolicyStateConfig
   * @module eAngular.Pages
   *
   * @description
   * Static page states
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Pages')
    .config(PrivacyPolicyStateConfig);

  /* @ngInject */
  function PrivacyPolicyStateConfig($stateProvider) {
    $stateProvider
      .state('page.privacypolicy', {
        url: '/privacy-policy',
        data: {
          roles: [],
          pageTitle: '$Mart DMS - Privacy Policy'
        },
        views: {
          'page-content': {
            templateUrl: 'modules/pages/privacy-policy/privacy-policy.html',
            controller: 'PrivacyPolicyController'
          }
        }
      });
  }
})();
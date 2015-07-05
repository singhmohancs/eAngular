(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Pages.ContactSupportStateConfig
   * @module eAngular.Pages
   *
   * @description
   * Static page states
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Pages')
    .config(ContactSupportStateConfig);

  /* @ngInject */
  function ContactSupportStateConfig($stateProvider) {
     $stateProvider
      .state('page.contactsupport', {
        url: '/contact-support',
        data: {
          roles: [],
          pageTitle: '$Mart DMS - Contact Support'
        },
        views: {
          'page-content': {
            templateUrl: 'modules/pages/contact-support/contact-support.html',
            controller: 'ContactSupportController'
          }
        }
      });
  }
})();

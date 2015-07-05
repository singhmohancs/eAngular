(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Pages.PagesStateConfig
   * @module eAngular.Pages
   *
   * @description
   * Static page states
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Pages')
    .config(PagesStateConfig);

  /* @ngInject */
  function PagesStateConfig($stateProvider) {
    $stateProvider
      .state('page', {
        abstract: true,
        parent: 'index',
        views: {
          'content': {
            template: '<div ui-view="page-content" class="fade-in-up"></div>',
          }
        },
        resolve: {
          authorize: ['Auth',
            function(Auth) {
              return Auth.authorize();
            }
          ]
        }

      });
  }
})();
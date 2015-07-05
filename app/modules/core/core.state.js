(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Core.Config
   * @module eAngular.Core
   *
   * @description
   * Core module state configurations
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Core')
    .config(coreStateConfig);

  /* @ngInject */
  function coreStateConfig($stateProvider, $urlRouterProvider, APP_CONFIG,$locationProvider) {
    $urlRouterProvider.otherwise('/');
     //$locationProvider.html5Mode(true);
    $stateProvider.state('index', {
      'abstract': true,
      views: {
        '': {
          templateUrl: APP_CONFIG.component + '/layout/layout.html',
          controller: 'LayoutController'
        }
      },
      resolve: {
        authorize: ['Auth',
          function(Auth) {
            return Auth.authorize();
          }
        ],
        translatePartialLoader: ['$translate', '$translatePartialLoader',
          function($translate, $translatePartialLoader) {
            $translatePartialLoader.addPart('global');
            $translatePartialLoader.addPart('language');
            return $translate.refresh();
          }
        ]
      }
    });
  }
})();
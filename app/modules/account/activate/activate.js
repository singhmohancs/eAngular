'use strict';

angular.module('eAngular.Account')
  .config(function($stateProvider) {
    $stateProvider
      .state('activate', {
        parent: 'account',
        url: '/activate?key',
        data: {
            roles: [],
            pageTitle: '$Mart DMS - Cloud based Delivery Management System',
            singleColumn : true,
            pageClass: 'page-signin'
        },
        views: {
          'account': {
            templateUrl: 'modules/account/activate/activate.html',
            controller: 'ActivationController'
          }
        },
        resolve: {
          translatePartialLoader: ['$translate', '$translatePartialLoader',
            function($translate, $translatePartialLoader) {
              $translatePartialLoader.addPart('activate');
              return $translate.refresh();
            }
          ]
        }
      });
  });
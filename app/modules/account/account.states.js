'use strict';

angular.module('eAngular.Account')
  .config(function($stateProvider) {
    $stateProvider
      .state('account', {
        abstract: true,
        parent: 'index',
        views: {
          'content': {
            template: '<div ui-view="account" class="fade-in-up"></div>',
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
  });
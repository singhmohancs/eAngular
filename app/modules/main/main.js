'use strict';

angular.module('eAngular')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        parent: 'index',
        url: '/',
        data: {
          roles: ['ROLE_USER'],
          pageClass : 'home-page',
          pageTitle:'main.title'
        },
        views: {
          'content': {
            templateUrl: 'modules/main/main.html',
            controller: 'MainController'
          }
        },
        resolve: {
          mainTranslatePartialLoader: ['$translate', '$translatePartialLoader',
            function($translate, $translatePartialLoader) {
              $translatePartialLoader.addPart('main');
              return $translate.refresh();
            }
          ]
        }
      });
  });
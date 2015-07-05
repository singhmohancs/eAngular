'use strict';

angular.module('eAngular.Account')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account.login', {
                parent: 'account',
                url: '/login',
                data: {
                    roles: [],
                    pageTitle: 'login.title',
                    singleColumn : true,
                    pageClass: 'page-signin'
                },
                views: {
                    'account': {
                        templateUrl: 'modules/account/login/login.html',
                        controller: 'LoginController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('login');
                        return $translate.refresh();
                    }]
                }
            });
    });

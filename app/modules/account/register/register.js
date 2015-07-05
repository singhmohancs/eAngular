'use strict';

angular.module('eAngular.Account')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account.register', {
                parent: 'account',
                url: '/register',
                data: {
                    roles: [],
                    pageTitle: 'register.title',
                    singleColumn : true,
                    pageClass: 'page-signup'
                },
                views: {
                    'account': {
                        templateUrl: 'modules/account/register/register.html',
                        controller: 'RegisterController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('register');
                        return $translate.refresh();
                    }]
                }
            });
    });

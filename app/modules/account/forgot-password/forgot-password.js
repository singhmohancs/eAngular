'use strict';

angular.module('eAngular.Account')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account.forgotpassword', {
                parent: 'account',
                url: '/forgotpassword',
                data: {
                    roles: [],
                    pageTitle: 'password.title',
                    singleColumn : true,
                    pageClass: 'page-signin'
                },
                views: {
                    'account': {
                        templateUrl: 'modules/account/forgot-password/forgot-password.html',
                        controller: 'ForgotPasswordController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('password');
                        return $translate.refresh();
                    }]
                }
            });
    });

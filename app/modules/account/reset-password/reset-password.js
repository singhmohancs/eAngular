'use strict';

angular.module('eAngular.Account')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account.resetpassword', {
                parent: 'account',
                url: '/reset/:token',
                data: {
                    roles: [],
                    pageTitle: '$Mart DMS - Cloud based Delivery Management System',
                    singleColumn : true,
                    pageClass: 'page-signin'
                },
                views: {
                    'account': {
                        templateUrl: 'modules/account/reset-password/reset-password.html',
                        controller: 'ResetPasswordController'
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

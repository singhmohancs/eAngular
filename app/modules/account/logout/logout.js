'use strict';

angular.module('eAngular.Account')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account.logout', {
                parent: 'account',
                url: '/logout',
                data: {
                    roles: []
                },
                views: {
                    'account': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'LogoutController'
                    }
                }
            });
    });

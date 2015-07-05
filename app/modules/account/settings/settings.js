'use strict';

angular.module('eAngular.Account')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account.settings', {
                parent: 'account',
                url: '/settings',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'global.menu.account.settings'
                },
                views: {
                    'account': {
                        templateUrl: 'modules/account/settings/settings.html',
                        controller: 'SettingsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('settings');
                        return $translate.refresh();
                    }]
                }
            });
    });

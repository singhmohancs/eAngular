'use strict';

angular.module('eAngular')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });

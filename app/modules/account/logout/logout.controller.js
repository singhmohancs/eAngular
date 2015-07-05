'use strict';

angular.module('eAngular.Account')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

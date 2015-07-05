'use strict';

angular.module('eAngular.Account')
    .controller('PasswordController', function ($scope, Auth, Principal,Spinner) {
        Principal.identity().then(function(account) {
            $scope.account = account;
        });

        $scope.success = null;
        $scope.error = null;
        $scope.doNotMatch = null;
        $scope.changePassword = function () {
            Spinner.show();
            if ($scope.password !== $scope.confirmPassword) {
                $scope.doNotMatch = 'ERROR';
            } else {
                $scope.doNotMatch = null;
                Auth.changePassword($scope.password).then(function () {
                    $scope.error = null;
                    $scope.success = 'OK';
                    Spinner.hide();
                }).catch(function () {
                    $scope.success = null;
                    $scope.error = 'ERROR';
                    Spinner.hide();
                });
            }
        };
    });

'use strict';

angular.module('eAngular')
  .factory('ResetPassword', function resetService($http,$resource) {

    return {
            reset: function(credentials) {
                var data = 'newPassword=' + encodeURIComponent(credentials.password) ;
                return $http.post('/api/reset/'+credentials.token+'', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (response) {
                    return response;
                });
            },
            validate: function(data){
                return $http.post('/api/reset/validate/'+data.token).success(function (response) {
                    return response;
                }).error(function (err) {
                    return err;
                });
            }
        };
  });
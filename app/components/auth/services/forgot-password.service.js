'use strict';

angular.module('eAngular')
  .factory('ForgotPassword', function($resource) {
    return $resource('/api/forgotpassword/', {}, {
      request: {
        method: "POST",
        params: {}
      }
    });
  });
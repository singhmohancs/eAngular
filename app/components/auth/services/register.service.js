'use strict';

angular.module('eAngular')
  .factory('Register', function($resource) {
    return $resource('api/registeraccount', {}, {
      save: {
        method: "POST",
        params: {}
      }
    });
  });
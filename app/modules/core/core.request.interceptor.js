(function() {
  'use strict';
  angular
    .module('eAngular.Core')
    .factory('requestHttpInterceptor', [
      '$q', '$rootScope',
      function($q, $rootScope) {
        return {
          request: function request(config) {
            /*console.info("url:::"+config.url+"::://///:::"+"index:::"+config.url.indexOf('api'));
            if (config.url.indexOf('api') == 0) {
              var url = config.url;
              url = url.split('/').join('-');
              url = 'resources/jsons/' + url + '.json';
              // config.url = url;
              // if (localStorage.getItem("token") === null) {
              //   config.headers['Token'].headers['X-Token'] = localStorage.getItem("token");
              // }else{
              //   config.headers['Token'].headers['X-Token'] = '';
              // }
             // config.url = url;
            }*/
            return config;
          }
        };
      }
    ])
    .config(['$httpProvider',
      function($httpProvider) {
        $httpProvider.interceptors.push('requestHttpInterceptor');
      }
    ])
})();
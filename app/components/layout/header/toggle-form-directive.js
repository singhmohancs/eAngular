'use strict';
angular
  .module('eAngular.Layout')
  .directive('toggleSearchForm', [function () {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        element.on('click', function(event) {
          event.preventDefault();
          element.parents('.navbar-custom-menu').toggleClass('open-search-form');
        });
      }
    };
  }])
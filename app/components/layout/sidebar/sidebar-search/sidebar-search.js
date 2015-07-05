'use strict';
angular
  .module('eAngular.Layout')
  .directive('sidebarSearch', function() {
    return {
      templateUrl: 'components/layout/sidebar/sidebar-search/sidebar-search.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function($scope) {
        $scope.selectedMenu = 'home';
      }
    };
  });
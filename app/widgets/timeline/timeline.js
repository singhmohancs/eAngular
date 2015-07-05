'use strict';
angular
  .module('eAngular.Widgets')
  .directive('timeline',function() {
    return {
        templateUrl:'widgets/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    };
  });

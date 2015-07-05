(function() {
  'use strict';
  var stopClickPropagation = function() {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element, attrs) {
          element.click(function(e) {
            e.stopPropagation();
          });
        }
      }
    }
  };
  var clickableRowDropDown = function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        element.bind('click', function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          element.parent('.btn-group').toggleClass('open');
        });
      }
    };
  };
  var preventDefault = function() {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element, attrs) {
          element.click(function(e) {
            e.preventDefault();
          });
        }
      }
    }
  };
  angular.module('eAngular')
    .directive('preventDefault', preventDefault)
    .directive('stopClickPropagation', stopClickPropagation)
    .directive('rowClickableDropdown', clickableRowDropDown);
}());
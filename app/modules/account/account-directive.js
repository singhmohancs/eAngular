(function() {
  'use strict';
  /**
   * @ngdoc Directive
   * @name eAngular.Account.Directive.resizeBackground
   * @module eAngular.Account
   *
   * @description
   * Adjust the background image when window is resized
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular')
    .directive('resizeBackground', [
      '$window',
      function($window) {
        return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            var $img = element.find('> img');
            angular.element($window).on('resize', function() {
              $img.attr('style', '');
              if ($img.height() < element.height()) {
                $img.css({
                  height: '100%',
                  width: 'auto'
                });
              }
            });
          }
        };
      }
    ]);
  angular
    .module('eAngular').directive('pwCheck', [

      function() {
        return {
          require: 'ngModel',
          link: function(scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function() {
              scope.$apply(function() {
                if (elem.val() == '') {
                  var v = true;
                } else {
                  var v = elem.val() === $(firstPassword).val();
                }
                ctrl.$setValidity('pwmatch', v);
              });
            });
          }
        }
      }
    ]);
})();
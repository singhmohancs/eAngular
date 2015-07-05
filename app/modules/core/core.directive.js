(function() {
  'use strict';

  angular
    .module('eAngular.Core')
    .directive('ngSpinnerBar', [
      '$rootScope',
      '$timeout',
      'notify',
      function($rootScope, $timeout, notify) {
        return {
          link: function(scope, element, attrs) {
            // by defult hide the spinner bar
            $rootScope.loadingSpinner = false;

            // display the spinner bar whenever the route changes(the content part started loading)
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
              $rootScope.loadingSpinner = true;
            });

            // hide the spinner bar on rounte change success(after the content loaded)
            $rootScope.$on('$stateChangeSuccess', function() {
              $rootScope.loadingSpinner = false;
              angular.element('body').removeClass('page-on-load'); // remove page loading indicator
            });

            // handle errors
            $rootScope.$on('$stateNotFound', function() {
              //element.addClass('hide'); // hide spinner bar
              $rootScope.loadingSpinner = false;
            });

            // handle errors
            $rootScope.$on('$stateChangeError', function() {
              //element.addClass('hide'); // hide spinner bar
              $rootScope.loadingSpinner = false;
            });
            $rootScope.$on('$stateChangeCancel', function() {
              //element.addClass('hide'); // hide spinner bar
              $rootScope.loadingSpinner = false;
            });

          }
        };
      }
    ]);
  /**
   * global spinner
   * @method Spinner.show()
   * @method Spinner.hide()
   */
  angular
    .module('eAngular.Core')
    .factory('Spinner', [
      '$rootScope',
      function($rootScope) {
        function Spinner() {}
        Spinner.prototype.show = function() {
          $rootScope.loadingSpinner = true;
        }
        Spinner.prototype.hide = function() {
          $rootScope.loadingSpinner = false;
        }

        return new Spinner();
      }
    ]);
})();
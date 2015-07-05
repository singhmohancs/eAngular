(function() {
  'use strict';

  angular.module('eAngular')
    .directive('fileModel', ['$parse',
      function($parse) {
        return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
              scope.$apply(function() {
                modelSetter(scope, element[0].files[0]);
              });
            });
          }
        };
      }
    ]);


    angular.module('eAngular')
    .directive('browseFileButton', [
      function() {
        return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            element.find('.upload_link').bind('click', function() {
              element.find('.upload_file').trigger('click');
            });

            scope.$on('$destroy', function(){
              element.find('.upload_link').unbind('click');
            });
          }
        };
      }
    ]);


}());
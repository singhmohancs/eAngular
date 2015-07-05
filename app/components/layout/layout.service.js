(function() {
  'use strict';
angular
   .module('eAngular.Layout')
    .service('layoutService', [

      function() {
        var _this = this,
          sidebar = false;

        _this.enableSidebar = function() {
          sidebar = true;
        };

        _this.disableSidebar = function() {
          sidebar = false;
        };

        _this.getSidebar = function() {
          return sidebar;
        };
      }
    ]);
})();
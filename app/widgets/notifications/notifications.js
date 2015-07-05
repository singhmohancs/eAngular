'use strict';
angular
  .module('eAngular.Widgets')
  .directive('notifications',function(){
		return {
        templateUrl:'widgets/notifications/notifications.html',
        restrict: 'E',
        replace: true,
    	};
	});



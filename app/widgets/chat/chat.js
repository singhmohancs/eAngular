'use strict';
angular
  .module('eAngular.Widgets')
  .directive('chat',function(){
		return {
        templateUrl:'widgets/chat/chat.html',
        restrict: 'E',
        replace: true,
    	};
	});



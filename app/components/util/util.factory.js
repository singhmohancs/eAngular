(function() {
  'use strict';
  /**
   * @ngdoc Factory
   * @name eAngular.main.Factory.utilFactory
   * @module eAngular
   *
   * @description
   * util factory contains all generic methods
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular')
    .factory('utilFactory', utilFactory);

  /* @ngInject */
  function utilFactory() {
    /**
     * [bgColors description]
     * @True {Array}
     */
    var bgColors = [{
      bg: 'bg-aqua',
      icon: 'fa-truck'
    }, {
      bg: 'bg-red',
      icon: 'fa-check'
    }, {
      bg: 'bg-green',
      icon: 'fa-send'
    }, {
      bg: 'bg-yellow',
      icon: 'fa-thumbs-up'
    }, {
      bg: 'bg-aqua',
      icon: 'fa-truck'
    }, {
      bg: 'bg-red',
      icon: 'fa-truck'
    }];
    /**
     * [getBgColors description]
     * @method getBgColors
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @return {[type]}    [description]
     */
    function getBgColors() {
      return bgColors;
    }
    /**
     * [getStatus description]
     * @method getStatus
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}  statusCode [description]
     * @return {[type]}             [description]
     */
    function getStatus(statusCode) {
      var colorCode = '',
        statusCode = statusCode ? statusCode.toLowerCase() : '',
        label;
      switch (statusCode) {
        case 'ontrack':
          colorCode = 'success';
          label = 'On Track';
          break;
        case 'aheadoftrack':
          colorCode = 'blue';
          label = 'Ahead Of Track';
          break;
        case 'behindtrack':
          colorCode = 'danger';
          label = 'Behind Track';
          break;
        case 'notstarted':
          colorCode = 'danger';
          label = 'Not Started';
          break;

      }
      return {
        colorCode: colorCode,
        label: label
      };
    }
    /**
     * [transportModeIcon description]
     * @method transportModeIcon
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}          transportModel [description]
     * @return {[type]}                         [description]
     */
    function transportModeIcon(transportModel) {
      var _transportModeIcon = '';
      transportModel = transportModel ? transportModel.toLowerCase():'';
      switch (transportModel) {
        case 'land':
          _transportModeIcon = 'fa-truck';
          break;
        case 'air':
          _transportModeIcon = 'fa-plane';
          break;
        case 'sea':
          _transportModeIcon = 'fa-ship';
          break;
      }
      return _transportModeIcon;
    }
    /**
     * [getNotificationTypeLable description]
     * @method getNotificationTypeLable
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}                 eventType [description]
     * @return {[type]}                           [description]
     */
    function getNotificationTypeLable(eventType) {
      var notificationLable = '';
      switch (eventType) {
        case 0:
          notificationLable = 'added';
          break;
        case 1:
          notificationLable = 'updated';
          break;
      }
      return notificationLable;
    }
    /**
     * [getFileType description]
     * @method getFileType
     * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
     * @param  {[type]}  fileType [description]
     * @return {Boolean}          [description]
     */
    function getFileType(fileType) {
      var _imageTypes = ['jpg', 'gif', 'png', 'bmp', 'jpeg', 'tif'],
        _videoTypes = ['3g2', '3gp' , 'asf', 'asx' ,'avi' , 'flv' , 'mov' , 'mp4' , 'mpg' , 'rm' , 'swf' , 'vob' , 'wmv' ],
        _fileString;
      if (!fileType) {
        return '';
      }

      var _fileType = fileType.toLowerCase();

      if (_imageTypes.indexOf(_fileType) >= 0) {
        return 'image';
      } else if (_videoTypes.indexOf(_fileType) >= 0) {
        return 'video';
      } else {
        return 'file';
      }
    }

    return {
      getStatus: getStatus,
      getTransportModeIcon: transportModeIcon,
      getNotificationTypeLable: getNotificationTypeLable,
      getBgColors: getBgColors,
      getFileType: getFileType
    }
  }
})();
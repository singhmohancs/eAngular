(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Core.Constant.ENV
   * @module eAngular.Core
   *
   * @description
   * Holds envoirment related properties
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Core')
    .constant('ENV', 'dev');

  /**
   * @ngdoc overview
   * @name eAngular.Core.Constant.VERSION
   * @module eAngular.Core
   *
   * @description
   * Holds code tag version
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Core')
    .constant('VERSION', '0.0.1');
  /**
   * @ngdoc overview
   * @name eAngular.Core.Constant.APP_CONFIG
   * @module eAngular.Core
   *
   * @description
   * Contains all static urls and configuration constants which are used in whole application
   *
   * If anything need to access in view(HTML) files then keep everything in view
   * and can be accessed by {{VIEW_CONFIG.assets}}
   */
  angular
    .module('eAngular.Core')
    .constant('APP_CONFIG', {
      'view': {
        assets: './images/',
        module: 'modules',
        component: 'components',
        endPoint: ''
      },
      module: 'modules',
      component: 'components',
      notificationInterval: 60000,
      endPoint: '',
      pagination: {
        job_detail_activities: 5,
        nav_message: 10,
        nav_message_load_more: 5,
        dashboard_activities: 3
      }
    });

  angular
    .module('eAngular.Core').constant('angularMomentConfig', {
      preprocess: 'utc'
      /*,
  timezone: 'Europe/Berlin'*/
    });

})();
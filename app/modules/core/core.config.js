(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name eAngular.Core.Config
   * @module eAngular.Core
   *
   * @description
   * Configuartion while provider are created
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Core')
    .config([
      '$httpProvider',
      '$translateProvider',
      'tmhDynamicLocaleProvider',
      'LoggerProvider',
      'httpRequestInterceptorCacheBusterProvider',
      'IdleProvider',
      'KeepaliveProvider',
      function($httpProvider, $translateProvider, tmhDynamicLocaleProvider, LoggerProvider, httpRequestInterceptorCacheBusterProvider, IdleProvider, KeepaliveProvider) {
        /**
         * Configure application timeout setting
         * inputs in seconds
         */
        var timeOutTime = 1800;
        IdleProvider.idle(timeOutTime);
        IdleProvider.timeout(timeOutTime);
        KeepaliveProvider.interval(2);

        //enable CSRF
        $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

        //Cache everything except rest api requests
        httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*api.*/, /.*protected.*/, /.*registeraccount.*/], true);
        /**
         * Configure logger module
         *
         * Enable logger for development mode
         * LoggerProvider.enabled(true)
         *
         * Disable logger for production mode
         * LoggerProvider.enabled(true)
         */
        LoggerProvider.enabled(true);

        // Initialize angular-translate
        $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: 'resources/i18n/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useCookieStorage();

        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');
      }
    ]);
  /**
   * @ngdoc overview
   * @name eAngular.Core.Run
   * @module eAngular.Core
   *
   * @description
   * Core module configuration in run block
   * Handle state change event
   * Check Authentication before state get change
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Core')
    .run([
      '$rootScope',
      '$window',
      '$state',
      '$translate',
      'Auth',
      'Principal',
      'Language',
      'ENV',
      'VERSION',
      'APP_CONFIG',
      'notify',
      'aiStorage',
      'Idle',
      function($rootScope, $window, $state, $translate, Auth, Principal, Language, ENV, VERSION, APP_CONFIG, notify, aiStorage, Idle) {
        /**
         * Enable timer to keep watching
         */
        Idle.watch();
        /**
         * Keep application configuration in rootScope
         */
        $rootScope.VIEW_CONFIG = APP_CONFIG.view;
        /**
         * Set global information to $rootScope
         */
        $rootScope.ENV = ENV;
        $rootScope.VERSION = VERSION;
        /**
         * Capture $stateChangeStart event on $rootScope
         * Authenticate user
         * Detect current language
         */
        $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
          $rootScope.toState = toState;
          $rootScope.toStateParams = toStateParams;
          /**
           * User authentication check for current state
           */
          if (Principal.isIdentityResolved()) {
            Auth.authorize();
          }

          /**
           * Update current lanaguage
           */
          Language.getCurrent().then(function(language) {
            $translate.use(language);
          });
        });
        /**
         * Capture $stateChangeSuccess event on $rootScope
         * Set page title
         */
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

           $rootScope.loadingSpinner = false;
           var titleKey = 'global.title';
          //Set page class
          $rootScope.$state = $state;

          //Set page class
          if (toState.data.pageClass) {
            $rootScope.pageClass = toState.data.pageClass;
          }

          $rootScope.previousStateName = fromState.name;
          $rootScope.previousStateParams = fromParams;

          // Set the page title key to the one configured in state or use default one
          if (toState.data.pageTitle) {
            titleKey = toState.data.pageTitle;
          }
          $translate(titleKey).then(function(title) {
            // Change window title with translated one
            $window.document.title = title;
          });
          // Scroll to top as state chenge
          var scrollTop = (fromState.name=='' || fromState.name=='tasks.mytasks' || fromState.name=='job.detail') ? false : true;
          if(scrollTop){
               document.body.scrollTop = document.documentElement.scrollTop = 0;
           }

        });
        /**
         * If perivious state is active or any state does not exits then go to home
         */
        $rootScope.back = function() {
          if ($state.get($rootScope.previousStateName) === null) {
            $state.go('home');
          } else {
            $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
          }
        };
      }
    ]);
})();
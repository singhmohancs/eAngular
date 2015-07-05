(function() {
  'use strict';

  angular
    .module('eAngular.Core', [
      /**
       * @module LocalStrorage
       *
       * @description
       * This module contails all feature of local storage which are easy to use and short in syntax
       */
      'angular-storage',
      /**
       * @module dynamicLocale
       *
       * @description
       * Module to be able to change the locale at an angularjs application
       */
      'tmh.dynamicLocale',
      /**
       * @module ngResource
       *
       * @description
       * The ngResource module provides interaction support with RESTful services via the $resource service.
       */
      'ngResource',
      /**
       * @module ui.router
       *
       * @description
       * AngularUI Router is a routing framework, which implements flexible routing with nested views in AngularJS.
       */
      'ui.router',
      /**
       * @module ngCookies
       *
       * @description
       * JavaScript plain cookies
       */
      'ngCookies',
      /**
       * @module angular-translate
       *
       * @description
       * angular-translate is an AngularJS module that makes your life much easier when
       * it comes to i18n and l10n including lazy loading and pluralization.
       */
      'pascalprecht.translate',
      /**
       * @module ngNotify
       *
       * @description
       * Alert message box for info, error, success, warning
       */
      'ngNotify',
      /**
       * @module ui.bootstrap
       *
       * @description
       * Twitter bootstrap ui componenets
       */
      'ui.bootstrap',
      /**
       * @module ui.slimscroll
       *
       * @description
       * any container smooth scrolling
       */
      'ui.slimscroll',
      /**
       * @module logger
       *
       * @description
       * console anything which is need to debug
       */
      'logger',
       /**
       * @module angularMoment
       *
       * @description
       * Parse, validate, manipulate, and display dates in JavaScript.
       */
      'angularMoment',
       /**
       * @module ui.slider
       *
       * @description
       * HTML Javascript slider with range
       */
      'ui.slider',
       /**
       * @module ngCacheBuster
       *
       * @description
       * For http request caching
       */
      'ngCacheBuster',
      /**
       * @module ngIdle
       *
       * @description
       * Application idle timeout
       */
      'ngIdle',
      'ngSanitize'
    ]);
})();
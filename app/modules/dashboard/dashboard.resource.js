(function() {
  'use strict';
  /**
   * @ngdoc Factory
   * @name eAngular.Dashboard.Factory.jobResource
   * @module eAngular.Dashboard
   *
   * @description
   * Implements CURD operations
   *
   * @author Mohan Singh ( gmail::singhmohancs@gmail.com, skype :: mohan.singh42 )
   */
  angular
    .module('eAngular.Dashboard')
    .factory('DashboardResource', DashboardResource);

  /* @ngInject */
  function DashboardResource($resource, APP_CONFIG) {
    /* $resource(API_URL, DEFAULT_PARAMETERS, CONFIGURE_YOUR_CUSTOM_METHODS)*/
    return $resource('api/dashboard/:customer_id:/:workstateid', {
      requestType: "@requestType",
    }, {
      findAllMetrices: {
        method: "GET",
        params: {},
        isArray: true,
        url: 'api/dashboard/metrics'
      },
      findAllMetricesByUser: {
        method: "GET",
        params: {
          requestType: "metrics",
          customer_id: "@customer_id",
        }
      },
      findJobsInWorkState: {
        method: "GET",
        params: {
          requestType: "job",
          workstateid: "@workstateid",
        }
      },
      findAllJobStatus: {
        method: "GET",
        params: {},
        isArray: true,
        url: 'api/dashboard/job/status'
      },
      find: {
        method: "GET",
        params: {
          id: "@id",
        }
      },
      save: {
        method: "POST",
        params: {
          requestType: "add",
          id: "@id",
        }
      },
      findAllActivities: {
        method: "GET",
        params: {},
        isArray: true,
        url: ' /api/dashboard/activityfeed'
      },
      update: {
        method: "PUT",
        params: {
          id: 0
        }
      }
    });
  }
})();
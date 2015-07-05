'use strict';

describe('controllers', function(){
  this.scope = {};

  beforeEach(module('eAngular'));

  beforeEach(inject(function($rootScope) {
    this.scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(this.scope.awesomeThings).toBeUndefined();

    $controller('MainCtrl', {
      $scope: this.scope
    });

    expect(angular.isArray(this.scope.awesomeThings)).toBeTruthy();
    expect(this.scope.awesomeThings.length > 5).toBeTruthy();
  }));
});

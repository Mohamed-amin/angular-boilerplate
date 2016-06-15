'use strict';

describe('homeCtrl', function() {
    beforeEach(module('myApp'));
    beforeEach(function() {
        module('myApp')
        inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            var rootScope = $rootScope;
            var controller = $controller('HomeCtrl', {
                $scope: scope,
            });
        });
    });
    it('exists', function() {
        inject(function($controller, $rootScope) {
            expect(function() {
                $controller('HomeCtrl', {
                    $scope: $rootScope.$new()
                });
            }).not.toThrow();
        });
    });

    it('Saves a Property', function() {
        inject(function() {
            expect($scope.saveProperty).to.exist;
            scope.saveProperty('1');
            expect(scope.savedProperties['1']).toBeDefined();
            expect(scope.properties['1']).not.toBeDefined();
        });
    });

    it('unSaves a Property', function() {
        inject(function() {
            expect(scope.unSaveProperty).to.exist;
            scope.unSaveProperty('1');
            expect(scope.savedProperties['1']).not.toBeDefined();
            expect(scope.properties['1']).toBeDefined();
        });
    });


});

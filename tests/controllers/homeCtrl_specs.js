'use strict';

describe('homeCtrl', function() {
    var scope, controller, rootScope;
    beforeEach(module('myApp'));
    beforeEach(function() {
        module('myApp')
        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            rootScope = $rootScope;
            controller = $controller('HomeCtrl', {
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

    it('saves a Property', function() {
        inject(function() {
            expect(scope.propertyAction).toEqual(jasmine.anything());
            scope.propertyAction({ action: 'SAVE', id: '1' });
            expect(scope.properties.filter((p) => {
                return p.id == '1'
            })).toEqual([]);
            expect(scope.savedProperties.filter((p) => {
                return p.id == '1'
            }).length > 0).toBe(true);
        });
    });

    it('removes a Property', function() {
        inject(function() {
            expect(scope.propertyAction).toEqual(jasmine.anything());
            scope.propertyAction({ action: 'REMOVE', id: '4' });
            expect(scope.savedProperties.filter((p) => {
                return p.id == '4'
            })).toEqual([]);
            expect(scope.properties.filter((p) => {
                return p.id == '4'
            }).length > 0).toBe(true);
        });
    });
});

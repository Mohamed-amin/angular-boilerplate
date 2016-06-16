'use strict';

describe('homeCtrl', function() {
    var scope ,controller,rootScope;
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

    it('Saves a Property', function() {
        inject(function() {
            expect(scope.propertyAction).toEqual(jasmine.anything());

            scope.propertyAction({action:'SAVE', id:2});
            console.log(scope.savedProperties)
            expect(scope.savedProperties.filter((p)=>{
                return p.id == '1'
            })).toEqual([]);
            expect(scope.savedProperties['1']).toBeDefined();
            
        });
    });

    it('unSaves a Property', function() {
        inject(function() {
            expect(scope.propertyAction).toEqual(jasmine.anything());
            scope.propertyAction({action:'UN-SAVE', id:4});
            expect(scope.savedProperties.filter((p)=>{
                return p.id == '4'
            })).toEqual([]);
            expect(scope.properties['1']).toBeDefined();
        });
    });


});

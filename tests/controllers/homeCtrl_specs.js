'use strict';

describe('homeCtrl', function() {
    beforeEach(module('myApp'));
    
    it('exists', function(){
        inject(function($controller, $rootScope){
            expect(function(){
                $controller('homeCtrl', {
                    $scope: $rootScope.$new()
                });
            }).not.toThrow();
        });
    });
    
});

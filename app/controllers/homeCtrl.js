'use strict';
/**
 * Widget Controller is the main Controller
 */
angular.module('myApp').controller('homeCtrl', function($rootScope, $scope) {
    console.log('hi')
    function error(err) {
        $scope.UIError = 'An error occurred';
        if (err) throw err;
    }
    $scope.hi = 'hi amin'

});
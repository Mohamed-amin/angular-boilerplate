'use strict';
/**
 * Widget Controller is the main Controller
 */
angular.module('myApp').controller('HomeCtrl', function($scope, Api) {
    function error(err) {
        $scope.UIError = 'An error occurred';
        if (err) throw err;
    }

    $scope.properties = Api.getProperties() || [];
    $scope.savedProperties = Api.getSavedProperties() || [];

});
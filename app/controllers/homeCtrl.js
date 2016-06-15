'use strict';
/**
 * Widget Controller is the main Controller
 */
angular.module('myApp').controller('HomeCtrl', function($scope, Api) {
    function error(err) {
        $scope.UIError = 'An error occurred';
        if (err) throw err;
    }
    $scope.propertyAction = (options) => {
        options = options || {};
        let isSaving = options.action === 'SAVE';
        let source = isSaving ? 'properties' : 'savedProperties';
        let target = isSaving ? 'savedProperties' : 'properties';

        let property = _.find($scope[source], options.id);
        $scope[target][options.id] = property;
        delete $scope[source][options.id]
    }

    $scope.properties = Api.getProperties() || [];
    $scope.savedProperties = Api.getSavedProperties() || [];


});

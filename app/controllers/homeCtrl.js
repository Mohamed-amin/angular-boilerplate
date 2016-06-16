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
    $scope.propertyAction = (options) => {
        options = options || {};
        let isSaving = options.action === 'SAVE';
        let source = isSaving ? 'properties' : 'savedProperties';
        let target = isSaving ? 'savedProperties' : 'properties';
        let property = _.find($scope[source], { id: options.id });

        $scope[target].push(property);
        $scope[source] = _.filter($scope[source], (p)=>{
        	return p.id !== options.id;
        })
    }



});

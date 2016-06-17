'use strict';
/**
 * Widget Controller is the main Controller
 */
angular.module('myApp').controller('HomeCtrl', function($scope, Api) {
    $scope.properties = Api.getProperties() || [];
    $scope.savedProperties = Api.getSavedProperties() || [];
    $scope.propertyAction = (options) => {
        options = options || {};
        let actionTypes = {
            'SAVE': { target: 'savedProperties', source: 'properties' },
            'REMOVE': { target: 'properties', source: 'savedProperties' },
        }

        let source = actionTypes[options.action].source;
        let target = actionTypes[options.action].target;
        let property = _.find($scope[source], { id: options.id });

        $scope[target].push(property);
        $scope[source] = _.filter($scope[source], (p) => {
            return p.id !== options.id;
        })
    }

});

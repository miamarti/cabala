'use strict';

/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('MainCtrl', function ($scope, KabalaBO) {
    var $core = {
        getCalculate: function () {
            $scope.birthday = $scope.day.toString() + '/' + $scope.month.toString() + '/' + $scope.year.toString();
            $scope.kabala = null;
            $scope.kabala = (new KabalaBO($scope.name, $scope.birthday)).getCalculate();
        }
    };

    $scope.getCalculate = $core.getCalculate.bind($core);
});

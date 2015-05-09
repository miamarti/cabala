'use strict';

/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('MainCtrl', function ($scope, KabalaBO) {
    $scope.kabala = {};
    var $core = {
        getCalculate: function () {
            var kabala = new KabalaBO($scope.name, $scope.birthday);
            $scope.kabala = kabala.getCalculate();
            console.log(kabala.getCalculate());
        }
    };

    $scope.getCalculate = $core.getCalculate.bind($core);
});

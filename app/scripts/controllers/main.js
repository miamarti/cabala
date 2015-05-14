/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('MainCtrl', function ($scope, DictionaryBean, KabalaBO) {
    'use strict';
    $scope.dictionary = (new DictionaryBean()).get();

    var $core = {
        getCalculate: function () {
            $scope.birthday = $scope.day.toString() + '/' + $scope.month.toString() + '/' + $scope.year.toString();
            $scope.kabala = null;
            $scope.kabala = (new KabalaBO($scope.name, $scope.birthday)).getCalculate();
        },
        setReset: function () {
            $scope.kabala = null;
        }
    };

    $scope.getCalculate = $core.getCalculate;
    $scope.setReset = $core.setReset;
});
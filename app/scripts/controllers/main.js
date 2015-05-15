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

    /*
    $scope.name = 'Jesus Nazareno Rei Dos Judeus';
    $scope.day = 25;
    $scope.month = 12;
    $scope.year = 2015;
    */
    var $core = {
        getCalculate: function () {
			$('#cabalaApp').attr('data-status', 'show');
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
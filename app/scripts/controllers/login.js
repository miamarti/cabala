/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('LoginCtrl', function ($scope, DictionaryBean) {
    'use strict';
    $scope.dictionary = (new DictionaryBean()).get();

    /*
    $scope.name = 'Jesus Nazareno Rei Dos Judeus';
    $scope.day = 25;
    $scope.month = 12;
    $scope.year = 2015;
    */
    var $core = {
        main: function () {
            if (typeof (Storage) !== "undefined") {
                $scope.name = localStorage.getItem("name");
                $scope.day = eval(localStorage.getItem("day"));
                $scope.month = eval(localStorage.getItem("month"));
                $scope.year = eval(localStorage.getItem("year"));
                $core.setReset();
                $core.keyUp();
            }
        },
        getCalculate: function () {
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("name", $scope.name.specialCharacters());
                localStorage.setItem("day", $scope.day.toString());
                localStorage.setItem("month", $scope.month.toString());
                localStorage.setItem("year", $scope.year.toString());
                location.assign("./#overview");
            }
        },
        setReset: function (all) {
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("name", '');
                localStorage.setItem("day", undefined);
                localStorage.setItem("month", undefined);
                localStorage.setItem("year", undefined);
            }
            if (all) {
                $scope.name = undefined;
                $scope.day = null;
                $scope.month = null;
                $scope.year = null;
            }
        },
        keyUp: function () {
            try {
                if (typeof $scope.day !== 'number' || $scope.day < 0) {
                    $scope.day = null;
                }
                if (typeof $scope.month !== 'number' || $scope.month < 0) {
                    $scope.month = null;
                }
                if (typeof $scope.year !== 'number' || $scope.year < 0) {
                    $scope.year = null;
                }
            } catch (e) {
                console.log('Failed to validate field type');
            }
            try {
                if (($scope.name.toString().length > 5) && ($scope.day.toString().length === 1 || $scope.day.toString().length === 2) && ($scope.month.toString().length === 1 || $scope.month.toString().length === 2) && ($scope.year.toString().length === 4)) {
                    $core.getCalculate();
                } else {
                    $core.setReset();
                }
            } catch (e) {
                $core.setReset();
            }
        }
    };

    $scope.getCalculate = $core.getCalculate;
    $scope.setReset = $core.setReset;
    $scope.$parent.setReset = $core.setReset.bind($core);
    $scope.keyUp = $core.keyUp;
    $core.main();
});
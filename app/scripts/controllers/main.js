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
        main : function(){
            if(typeof(Storage) !== "undefined") {
                $scope.name = localStorage.getItem("name");
                $scope.day = eval(localStorage.getItem("day"));
                $scope.month = eval(localStorage.getItem("month"));
                $scope.year = eval(localStorage.getItem("year"));
                $core.setReset();
                $core.keyUp();
            }
        },
        setAnim: function (x) {
            $('.fateContainerResult').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass();
            });
        },
        getCalculate: function () {
            $('#cabalaApp').attr('data-status', 'show');
            $scope.birthday = $scope.day.toString() + '/' + $scope.month.toString() + '/' + $scope.year.toString();
            $scope.kabala = null;
            $scope.kabala = (new KabalaBO($scope.name.specialCharacters(), $scope.birthday)).getCalculate();
            $core.setAnim('bounce');

            if(typeof(Storage) !== "undefined") {
                localStorage.setItem("name", $scope.name.specialCharacters());
                localStorage.setItem("day", $scope.day.toString());
                localStorage.setItem("month", $scope.month.toString());
                localStorage.setItem("year", $scope.year.toString());
            }
        },
        setReset: function () {
            $scope.kabala = false;
            $('#cabalaApp').attr('data-status', 'edit');
            if(typeof(Storage) !== "undefined") {
                localStorage.setItem("name", '');
                localStorage.setItem("day", undefined);
                localStorage.setItem("month", undefined);
                localStorage.setItem("year", undefined);
            }
        },
        keyUp: function () {
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
    $scope.keyUp = $core.keyUp;
    $core.main();
});

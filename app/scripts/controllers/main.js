/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('MainCtrl', function ($scope, DictionaryBean, KabalaBO, TreeOfLifeBO, SignsBO) {
    'use strict';
    $scope.dictionary = (new DictionaryBean()).get();

    var $core = {
        main: function () {
            if (typeof (Storage) !== "undefined") {
                $scope.name = localStorage.getItem("name");
                $scope.day = eval(localStorage.getItem("day"));
                $scope.month = eval(localStorage.getItem("month"));
                $scope.year = eval(localStorage.getItem("year"));
                $core.setReset();
                $core.run();
                if ($scope.name === '') {
                    location.assign("#login");
                }
            }
        },
        setAnim: function (x) {
            $('.fateContainerResult').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass();
            });
        },
        getCalculate: function () {
            $('#cabalaApp').attr('data-status', 'show');
            $core.setAnim('bounce');
            $scope.signs = SignsBO.get($scope.day, $scope.month);
            console.log($scope.signs);

            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("name", $scope.name.specialCharacters());
                localStorage.setItem("day", $scope.day.toString());
                localStorage.setItem("month", $scope.month.toString());
                localStorage.setItem("year", $scope.year.toString());
            }
        },
        setReset: function (all) {
            $scope.kabala = false;
            $('#cabalaApp').attr('data-status', 'edit');
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
        run: function () {
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
    $scope.run = $core.run;
    $core.main();
});
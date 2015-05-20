/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('MainCtrl', function ($scope, DictionaryBean, KabalaBO, TreeOfLifeBO) {
    'use strict';
    $scope.dictionary = (new DictionaryBean()).get();

    /*
    $scope.name = 'Jesus Nazareno Rei Dos Judeus';
    $scope.day = 25;
    $scope.month = 12;
    $scope.year = 2015;
    */
    var $core = {
        size : {
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                screenWidth: screen.width,
                screenHeight: screen.height
        },
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
        setAnim: function (x) {
            $('.fateContainerResult').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass();
            });
        },
        getCalculate: function () {
            $('#cabalaApp').attr('data-status', 'show');
            $scope.birthday = $scope.day.toString() + '/' + $scope.month.toString() + '/' + $scope.year.toString();
            $scope.kabala = null;
			$scope.treeOfLife = null;
            $scope.kabala = (new KabalaBO($scope.name.specialCharacters(), $scope.birthday)).getCalculate();
            $scope.treeOfLife = (new TreeOfLifeBO($scope.name.specialCharacters())).getCalculate();
            $core.setAnim('bounce');

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
            if(all){
                $scope.name = undefined;
                $scope.day = null;
                $scope.month = null;
                $scope.year = null;
            }
        },
        keyUp: function () {
            try{
                if(typeof $scope.day !== 'number' || $scope.day < 0){
                    $scope.day = null;
                }
                if(typeof $scope.month !== 'number' || $scope.month < 0){
                    $scope.month = null;
                }
                if(typeof $scope.year !== 'number' || $scope.year < 0){
                    $scope.year = null;
                }
            } catch (e) {
                console.log('Failed to validate field type');
            }
            try {
                if($scope.day.toString().length >= 2){
                    $('[data-ng-model="month"]').focus();
                }
                if($scope.month.toString().length >= 2){
                    $('[data-ng-model="year"]').focus();
                }
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
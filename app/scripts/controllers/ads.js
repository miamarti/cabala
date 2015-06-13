/**
 * @ngdoc function
 * @name cabalaApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the cabalaApp
 */
angular.module('cabalaApp').controller('AdsCtrl', function ($scope, DictionaryBean) {
    'use strict';
    $scope.dictionary = (new DictionaryBean()).get();

    var $core = {
        main: function () {
            if (!this.navigator.onLine) {
                location.assign("#login");
            }
        }
    };

    $core.main();
});
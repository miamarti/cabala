angular.module('cabalaApp').factory('CurrentDateBean', [function () {
    'use strict';
    return function () {
        this.day = {
            number: (new Date()).getDate(),
            sum: 0
        };
        this.months = {
            number: (new Date()).getMonth() + 1,
            sum: 0
        };
        this.year = {
            number: (new Date()).getFullYear(),
            sum: 0
        };
    };
}]);

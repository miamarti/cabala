angular.module('cabalaApp').factory('BirthdayBean', [function () {
    'use strict';
    return function (birthday) {
        this.date = birthday;
        this.day = {
            number: birthday.split('/')[0],
            sum: 0
        };
        this.months = {
            number: birthday.split('/')[1],
            sum: 0
        };
        this.year = {
            number: birthday.split('/')[2],
            sum: 0
        };
    };
}]);

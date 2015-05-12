angular.module('cabalaApp').factory('MessageBean', [function () {
    'use strict';
    return function () {
        this.number = 0;
        this.message = '';
    };
}]);

angular.module('cabalaApp').factory('MessageAgeBean', ['MessageBean', function (MessageBean) {
    'use strict';
    return function () {
        MessageBean.apply(this, arguments);
        this.ageLimit = 0;
    };
}]);

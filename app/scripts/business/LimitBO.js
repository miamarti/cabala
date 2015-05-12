angular.module('cabalaApp').factory('LimitBO', [function () {
    'use strict';
    var Core = function () {
        this.getLimit = function (value) {
            var soma = 0;
            if (value > 9) {
                if (value === 11 || value === 22 || value === 33) {
                    return value;
                } else {
                    for (var i = 0; i < value.toString().length; i++) {
                        /*jslint evil: true */
                        soma += eval(value.toString()[i]);
                    }
                    if (soma > 9) {
                        return this.getLimit(soma);
                    } else {
                        return soma;
                    }
                }
            } else {
                return value;
            }
        };
    };
    return new Core();
}]);

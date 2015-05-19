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
                        return new Core().getLimit(soma);
                    } else {
                        return soma;
                    }
                }
            } else {
                return value;
            }
        };

        this.getLimit22 = function (value) {
            if (value > 22) {
                var refNum = value.toString();
                var sum = 0;
                for (var i = 0; i < refNum.length; i++) {
                    sum += eval(refNum[i]);
                }
                return new Core().getLimit22(sum);
            } else {
                return value;
            }
        };
    };
    return new Core();
}]);
'use strict';

describe('Controller: MainCtrl', function () {
    var MainCtrl, scope;

    // load the controller's module
    beforeEach(module('cabalaApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.name = 'Jesus Nazareno Rei dos Judeus';
        scope.day = '25';
        scope.month = '12';
        scope.year = '2015';

        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(MainCtrl).toBeDefined();
    });

    it('checking the calculation of numerology', function () {
        scope.getCalculate();
        expect(scope.kabala.nameMap).toEqual('15131 51819556 959 461 134531');
    });

    it('checking the reset calculation numerology', function () {
        scope.setReset();
        expect(scope.kabala).toEqual(null);
    });
});
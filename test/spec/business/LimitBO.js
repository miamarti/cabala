'use strict';

describe('Model: LimitBO', function () {

    // load the controller's module
    beforeEach(module('cabalaApp'));

    it('can get an instance of LimitBO', inject(function (LimitBO) {
        expect(LimitBO).toBeDefined();
    }));

    it('checking the numerical limitation of only one number', inject(function (LimitBO) {
        expect(LimitBO.getLimit(75)).toEqual(3);
        expect(LimitBO.getLimit(43)).toEqual(7);
        expect(LimitBO.getLimit(1571)).toEqual(5);
    }));
});
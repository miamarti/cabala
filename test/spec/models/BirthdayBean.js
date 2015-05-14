'use strict';

describe('Model: BirthdayBean', function () {

    // load the controller's module
    beforeEach(module('cabalaApp'));

    it('can get an instance of BirthdayBean', inject(function (BirthdayBean) {
        expect(BirthdayBean).toBeDefined();
    }));

    it('checking split dates', inject(function (BirthdayBean) {
        expect(JSON.stringify(new BirthdayBean('19/05/2010'))).toEqual(JSON.stringify({
            date: '19/05/2010',
            day: {
                number: '19',
                sum: 0
            },
            months: {
                number: '05',
                sum: 0
            },
            year: {
                number: '2010',
                sum: 0
            }
        }));
    }));
});
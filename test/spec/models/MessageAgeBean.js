'use strict';

describe('Model: MessageAgeBean', function () {

    // load the controller's module
    beforeEach(module('cabalaApp'));

    it('can get an instance of MessageAgeBean', inject(function (MessageAgeBean) {
        expect(MessageAgeBean).toBeDefined();
    }));

    it('checking Object instance', inject(function (MessageAgeBean) {
        expect(JSON.stringify(new MessageAgeBean())).toEqual('{"number":0,"message":"","ageLimit":0}');
    }));
});
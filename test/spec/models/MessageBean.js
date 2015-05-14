'use strict';

describe('Model: MessageBean', function () {

    // load the controller's module
    beforeEach(module('cabalaApp'));

    it('can get an instance of MessageBean', inject(function (MessageAgeBean) {
        expect(MessageAgeBean).toBeDefined();
    }));

    it('checking Object instance', inject(function (MessageBean) {
        expect(JSON.stringify(new MessageBean())).toEqual('{"number":0,"message":""}');
    }));
});
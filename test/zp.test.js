var expect = require('chai').expect;

var HelloWorld = require('../zp');

describe("HelloWorld", function () {
    describe("#say()", function () {
        var lisa = new HelloWorld('lisa');

        var result = lisa.say('hello');

        expect(result).to.equal('lisa say hello to you.');
    });
});
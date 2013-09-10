var systems = require('../'),
    expect = require('expect.js');

describe('hsv', function() {
    it('forward', function() {
        expect(systems.hsv([255, 0, 0])).to.eql([0, 1, 1]);
        expect(systems.hsv([0, 255, 0])).to.eql([120, 1, 1]);
        expect(systems.hsv([0, 0, 255])).to.eql([240, 1, 1]);
    });
    it('invert', function() {
        expect(systems.hsv.invert([0, 1, 1])).to.eql([255, 0, 0]);
        expect(systems.hsv.invert([120, 1, 1])).to.eql([0, 255, 0]);
    });
});

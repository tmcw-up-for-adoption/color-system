var systems = require('../'),
    expect = require('expect.js');

describe('hsl', function() {
    it('forward', function() {
        expect(systems.hsl([255, 0, 0])).to.eql([0, 1, 0.5]);
        expect(systems.hsl([0, 255, 0])).to.eql([120, 1, 0.5]);
        expect(systems.hsl([0, 0, 255])).to.eql([240, 1, 0.5]);
    });
});

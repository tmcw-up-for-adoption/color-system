var systems = require('../'),
    expect = require('expect.js');

describe('cmyk', function() {
    it('forward', function() {
        expect(systems.cmyk([0, 0, 0])).to.eql([0, 0, 0, 1]);
        expect(systems.cmyk([255, 0, 0])).to.eql([0, 1, 1, 0]);
        expect(systems.cmyk([0, 255, 0])).to.eql([1, 0, 1, 0]);
    });
});

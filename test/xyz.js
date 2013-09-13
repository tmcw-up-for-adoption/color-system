var systems = require('../'),
    expect = require('expect.js');

describe('xyz', function() {
    describe('conversion', function() {
        it('#converts', function() {
            // these values confirmed against http://colormine.org/convert/rgb-to-xyz
            expect(systems.xyz([0, 0, 0])).to.eql([0, 0, 0]);
            expect(systems.xyz([255, 0, 0])).to.eql([41.24, 21.26, 1.9300000000000002]);
            expect(systems.xyz([0, 255, 0])).to.eql([35.76, 71.52, 11.92]);
        });
    });
});

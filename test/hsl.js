var systems = require('../'),
    expect = require('expect.js');

describe('hsl', function() {
    describe('components', function() {
        it('#saturation', function() {
            expect(systems.saturation([255, 0, 0])).to.eql(1);
            expect(systems.saturation([0, 0, 0])).to.eql(0);
            expect(systems.saturation([20, 10, 10])).to.eql(1/3);
        });

        it('#hue', function() {
            expect(systems.hue([255, 0, 0])).to.eql(0);
            expect(systems.hue([0, 255, 0])).to.eql(120);
            expect(systems.hue([0, 0, 255])).to.eql(240);
        });

        it('#lightness', function() {
            expect(systems.lightness([255, 0, 0])).to.eql(0.5);
            expect(systems.lightness([0, 255, 0])).to.eql(0.5);
            expect(systems.lightness([255, 255, 255])).to.eql(1);
            expect(systems.lightness([0, 0, 0])).to.eql(0);
        });
    });

    describe('conversion', function() {
        it('forward', function() {
            expect(systems.hsl([255, 0, 0])).to.eql([0, 1, 0.5]);
            expect(systems.hsl([0, 255, 0])).to.eql([120, 1, 0.5]);
            expect(systems.hsl([0, 0, 255])).to.eql([240, 1, 0.5]);
        });
        it('invert', function() {
            expect(systems.hsl.invert([0, 1, 0.5])).to.eql([255, 0, 0]);
            expect(systems.hsl.invert([120, 1, 0.5])).to.eql([0, 255, 0]);
            expect(systems.hsl.invert([240, 1, 0.5])).to.eql([0, 0, 255]);
        });
    });
});

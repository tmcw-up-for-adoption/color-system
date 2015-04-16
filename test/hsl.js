var systems = require('../'),
    expect = require('./expect-aprx');

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
            expect(systems.hsl([0, 0, 0])).to.aprx([0, 0, 0]);
            expect(systems.hsl([128, 128, 128])).to.aprx([0, 0, 0.5]);
            expect(systems.hsl([255, 255, 255])).to.aprx([0, 0, 1]);

            expect(systems.hsl([128, 0, 0])).to.aprx([0, 1, 0.25]);
            expect(systems.hsl([128, 128, 0])).to.aprx([60, 1, 0.25]);
            expect(systems.hsl([0, 128, 0])).to.aprx([120, 1, 0.25]);
            expect(systems.hsl([0, 128, 128])).to.aprx([180, 1, 0.25]);
            expect(systems.hsl([0, 0, 128])).to.aprx([240, 1, 0.25]);
            expect(systems.hsl([128, 0, 128])).to.aprx([300, 1, 0.25]);

            expect(systems.hsl([255, 0, 0])).to.aprx([0, 1, 0.5]);
            expect(systems.hsl([0, 255, 0])).to.aprx([120, 1, 0.5]);
            expect(systems.hsl([0, 0, 255])).to.aprx([240, 1, 0.5]);
        });
        it('invert', function() {
            expect(systems.hsl.invert([0, 0, 0])).to.aprx([0, 0, 0]);
            expect(systems.hsl.invert([0, 0, 0.5])).to.aprx([128, 128, 128]);
            expect(systems.hsl.invert([0, 0, 1])).to.aprx([255, 255, 255]);

            expect(systems.hsl.invert([0, 1, 0.25])).to.aprx([128, 0, 0]);
            expect(systems.hsl.invert([60, 1, 0.25])).to.aprx([128, 128, 0]);
            expect(systems.hsl.invert([120, 1, 0.25])).to.aprx([0, 128, 0]);
            expect(systems.hsl.invert([180, 1, 0.25])).to.aprx([0, 128, 128]);
            expect(systems.hsl.invert([240, 1, 0.25])).to.aprx([0, 0, 128]);
            expect(systems.hsl.invert([300, 1, 0.25])).to.aprx([128, 0, 128]);

            expect(systems.hsl.invert([0, 1, 0.5])).to.aprx([255, 0, 0]);
            expect(systems.hsl.invert([120, 1, 0.5])).to.aprx([0, 255, 0]);
            expect(systems.hsl.invert([240, 1, 0.5])).to.aprx([0, 0, 255]);
        });
    });
});

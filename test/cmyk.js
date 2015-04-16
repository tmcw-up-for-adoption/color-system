var systems = require('../'),
    expect = require('./expect-aprx');

describe('cmyk', function() {
    it('forward', function() {
        expect(systems.cmyk([0, 0, 0])).to.aprx([0, 0, 0, 1]);
        expect(systems.cmyk([128, 128, 128])).to.aprx([0, 0, 0, 0.5]);
        expect(systems.cmyk([255, 255, 255])).to.aprx([0, 0, 0, 0]);

        expect(systems.cmyk([128, 0, 0])).to.aprx([0, 1, 1, 0.5]);
        expect(systems.cmyk([128, 128, 0])).to.aprx([0, 0, 1, 0.5]);
        expect(systems.cmyk([0, 128, 0])).to.aprx([1, 0, 1, 0.5]);
        expect(systems.cmyk([0, 128, 128])).to.aprx([1, 0, 0, 0.5]);
        expect(systems.cmyk([0, 0, 128])).to.aprx([1, 1, 0, 0.5]);
        expect(systems.cmyk([128, 0, 128])).to.aprx([0, 1, 0, 0.5]);

        expect(systems.cmyk([255, 0, 0])).to.aprx([0, 1, 1, 0]);
        expect(systems.cmyk([0, 255, 0])).to.aprx([1, 0, 1, 0]);
        expect(systems.cmyk([0, 0, 255])).to.aprx([1, 1, 0, 0]);
    });
    it('backward', function() {
        expect(systems.cmyk.invert([0, 0, 0, 1])).to.aprx([0, 0, 0]);
        expect(systems.cmyk.invert([0, 0, 0, 0.5])).to.aprx([128, 128, 128]);
        expect(systems.cmyk.invert([0, 0, 0, 0])).to.aprx([255, 255, 255]);

        expect(systems.cmyk.invert([0, 1, 1, 0.5])).to.aprx([128, 0, 0]);
        expect(systems.cmyk.invert([0, 0, 1, 0.5])).to.aprx([128, 128, 0]);
        expect(systems.cmyk.invert([1, 0, 1, 0.5])).to.aprx([0, 128, 0]);
        expect(systems.cmyk.invert([1, 0, 0, 0.5])).to.aprx([0, 128, 128]);
        expect(systems.cmyk.invert([1, 1, 0, 0.5])).to.aprx([0, 0, 128]);
        expect(systems.cmyk.invert([0, 1, 0, 0.5])).to.aprx([128, 0, 128]);

        expect(systems.cmyk.invert([0, 1, 1, 0])).to.aprx([255, 0, 0]);
        expect(systems.cmyk.invert([1, 0, 1, 0])).to.aprx([0, 255, 0]);
        expect(systems.cmyk.invert([1, 1, 0, 0])).to.aprx([0, 0, 255]);
    });
});

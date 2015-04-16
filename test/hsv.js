var systems = require('../'),
    expect = require('expect.js');

describe('hsv', function() {
    it('forward', function() {
        expect(systems.hsv([0, 0, 0])).to.aprx([0, 0, 0]);
        expect(systems.hsv([128, 128, 128])).to.aprx([0, 0, 0.5]);
        expect(systems.hsv([255, 255, 255])).to.aprx([0, 0, 1]);

        expect(systems.hsv([128, 0, 0])).to.aprx([0, 1, 0.5]);
        expect(systems.hsv([128, 128, 0])).to.aprx([60, 1, 0.5]);
        expect(systems.hsv([0, 128, 0])).to.aprx([120, 1, 0.5]);
        expect(systems.hsv([0, 128, 128])).to.aprx([180, 1, 0.5]);
        expect(systems.hsv([0, 0, 128])).to.aprx([240, 1, 0.5]);
        expect(systems.hsv([128, 0, 128])).to.aprx([300, 1, 0.5]);

        expect(systems.hsv([255, 0, 0])).to.aprx([0, 1, 1]);
        expect(systems.hsv([0, 255, 0])).to.aprx([120, 1, 1]);
        expect(systems.hsv([0, 0, 255])).to.aprx([240, 1, 1]);
    });
    it('invert', function() {
        expect(systems.hsv.invert([0, 0, 0])).to.aprx([0, 0, 0]);
        expect(systems.hsv.invert([0, 0, 0.5])).to.aprx([128, 128, 128]);
        expect(systems.hsv.invert([0, 0, 1])).to.aprx([255, 255, 255]);

        expect(systems.hsv.invert([0, 1, 0.5])).to.aprx([128, 0, 0]);
        expect(systems.hsv.invert([60, 1, 0.5])).to.aprx([128, 128, 0]);
        expect(systems.hsv.invert([120, 1, 0.5])).to.aprx([0, 128, 0]);
        expect(systems.hsv.invert([180, 1, 0.5])).to.aprx([0, 128, 128]);
        expect(systems.hsv.invert([240, 1, 0.5])).to.aprx([0, 0, 128]);
        expect(systems.hsv.invert([300, 1, 0.5])).to.aprx([128, 0, 128]);

        expect(systems.hsv.invert([0, 1, 1])).to.aprx([255, 0, 0]);
        expect(systems.hsv.invert([120, 1, 1])).to.aprx([0, 255, 0]);
        expect(systems.hsv.invert([240, 1, 1])).to.aprx([0, 0, 255]);
    });
});

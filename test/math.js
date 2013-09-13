var math = require('../src/math'),
    expect = require('expect.js');

describe('math', function() {
    it('#min', function() {
        expect(math.min([0, 1, 2, 3])).to.eql(0);
    });

    it('#max', function() {
        expect(math.max([0, 1, 2, 3])).to.eql(3);
    });

    it('#clamp', function() {
        expect(math.clamp(100, 0, 100)).to.eql(100);
        expect(math.clamp(200, 0, 100)).to.eql(100);
        expect(math.clamp(-100, 0, 100)).to.eql(0);
    });

    it('#degreeClamp', function() {
        expect(math.degreeClamp(0)).to.eql(0);
        expect(math.degreeClamp(360)).to.eql(0);
        expect(math.degreeClamp(380)).to.eql(20);
        expect(math.degreeClamp(-10)).to.eql(350);
    });
});

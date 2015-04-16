var expect = require('expect.js');

expect.Assertion.prototype.aprx = function aprx(color) {
    var success;

    if (Array.isArray(this.obj)) {
        success = this.obj.every(function(value, index) {
            var factor = (value < 1) ? 255 : 1;

            return Math.round(value * factor) === Math.round(color[index] * factor);
        });
    } else {
        var factor = (this.obj < 1) ? 255 : 1;

        success = Math.round(this.obj * factor) === Math.round(color * factor);
    }

    if (!success) {
        this.be(color); // Throw assection
    } // Else no further checks needed
};

module.exports = expect;

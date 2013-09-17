// # Linear RGB
//
// RGB triplets are [stored in sRGB](http://en.wikipedia.org/wiki/SRGB) and
// converted to and from linear values on the fly. THis conversion compensates
// for a non-linear conversion including gamma.
module.exports = function srgb_linearrgb(rgb) {
    return rgb.map(function(_) {
        _ /= 255;
        if (_ <= 0.04045) return _ / 12.92;
        else return Math.pow((_ + 0.055) / 1.055, 2.4);
    });
};

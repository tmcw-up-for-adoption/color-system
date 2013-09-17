var math = require('./math');

// # [Saturation](http://bit.ly/1f0wzW7)
//
// The saturation of a color is determined by a combination of light
// intensity and how much it is distributed across the spectrum
// of different wavelengths.
module.exports = function saturation(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });

    var min = math.min(rgb),
        max = math.max(rgb);

    // all shades of grey, including white and black, have zero saturation.
    if (min === max) return 0;

    var l = (min + max) / 2;

    return (l < 0.5) ? ((max - min) / (max + min)) :
        (max - min) / (2 - max - min);
};

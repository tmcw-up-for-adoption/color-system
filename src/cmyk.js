var math = require('./math');

// # [CMYK](http://en.wikipedia.org/wiki/CMYK_color_model)
//
// Is a substractive color model, used in printing. As opposed to additive
// color models like RGB, the combination of the colors in ink forms primaries,
//
//     Y + M = R
//     Y + C = G
//     M + C = B
module.exports = function(rgb) {
    if (math.max(rgb) === 0) return [0, 0, 0, 1];

    // The `key` color is the darkest in the RGB triplet. The intensity
    // of other colors is based on this single factor.
    var key = math.min(rgb) / 255,
        inv_key = 1 - key;

    rgb = rgb.map(function(_) { return ((1 - (_ / 255)) - key) / inv_key; });

    // CMYK colors are represented by a 4-number array with values
    // from 0-1
    return [
        rgb[0],
        rgb[1],
        rgb[2],
        key
    ];
};

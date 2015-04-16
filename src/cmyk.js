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

    var key = 1 - math.max(rgb) / 255,
        cmk = rgb.map(function(_) { return 1 - _ / (255 * (1 - key)); });


    // CMYK colors are represented by a 4-number array with values
    // from 0-1
    return [
        cmk[0],
        cmk[1],
        cmk[2],
        key
    ];
};

module.exports.invert = function(cymk) {
    var c = cymk[0];
    var y = cymk[1];
    var m = cymk[2];
    var key = cymk[3];

    return [c, y, m].map(function(_) { return 255 * (1 - _) * (1 - key); });
};

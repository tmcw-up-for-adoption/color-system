var math = require('./math');

module.exports = function(rgb) {
    if (math.max(rgb) === 0) return [0, 0, 0, 1];

    var key = math.min(rgb) / 255,
        inv_key = 1 - key;

    rgb = rgb.map(function(_) { return ((1 - (_ / 255)) - key) / inv_key; });

    return [
        rgb[0],
        rgb[1],
        rgb[2],
        key
    ];
};

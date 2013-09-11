var math = require('./math');

module.exports = function saturation(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });

    var min = math.min(rgb),
        max = math.max(rgb);

    if (min === max) return 0;

    var l = (min + max) / 2;

    return (l < 0.5) ? ((max - min) / (max + min)) :
        (max - min) / (2 - max - min);
};

var math = require('./math');

// Compute the hue of a color in degrees from 0-360
module.exports = function hue(rgb) {

    rgb = rgb.map(function(r) { return r /= 255; });

    // unpack r, g, b values for reference
    var r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        min = math.min(rgb),
        max = math.max(rgb),
        delta = max - min,
        h;


    // compute the angle from the most dominate color direction to its
    // location between the other two colors
    if (max === min) {
        return 0;
    } else if (r === max) {
        h = 60 * ((g - b) / delta);
    } else if (g === max) {
        h = 60 * (2 + (b - r) / delta);
    } else if (b === max) {
        h = 60 * (4 + (r - g) / delta);
    }

    // clamp the output to ensure that invalid hues are not output
    return math.degreeClamp(h);
};

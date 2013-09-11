var math = require('./math');

// color lightness, from the perspective of RGB - simply the average
// of the minimum and maximum components.
module.exports = function lightness(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });
    return (math.max(rgb) + math.min(rgb)) / 2;
};

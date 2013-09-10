var constants = require('./constants'),
    rgb_linear = require('./rgb_linear');

module.exports = function rgb_lab(rgb) {
    rgb = rgb_linear(rgb);
    var x = xyz_lab(0.4124564 * rgb[0] + 0.3575761 * rgb[1] + 0.1804375 * rgb[2]) / constants.X,
        y = xyz_lab(0.2126729 * rgb[0] + 0.7151522 * rgb[1] + 0.0721750 * rgb[2]) / constants.Y,
        z = xyz_lab(0.0193339 * rgb[0] + 0.1191920 * rgb[1] + 0.9503041 * rgb[2]) / constants.Z;
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
};

function xyz_lab(_) {
    if (_ > 0.008856) return Math.pow(_, 1 / 3);
    else return (7.787037 * _ + 4 / 29);
}

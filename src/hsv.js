var hue = require('./hue'),
    saturation = require('./saturation'),
    value = require('./value');

module.exports = function hsl(rgb) {
    return [hue(rgb), saturation(rgb), value(rgb)];
};

module.exports.invert = function rgb(hsv) {
    if (!hsv[1]) return [hsv[2] * 255, hsv[2] * 255, hsv[2] * 255];
    var h = hsv[0], s = hsv[1], v = hsv[2] * 255;
    h /= 60;
    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - s * f),
        t = v * (1 - s * (1 - f));
    switch (i) {
        case 0: return [v, t, p];
        case 1: return [q, v, p];
        case 2: return [p, v, t];
        case 3: return [p, q, v];
        case 4: return [t, p, v];
        case 5: return [v, p, q];
    }
};

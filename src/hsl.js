var hue = require('./hue'),
    saturation = require('./saturation'),
    luminosity = require('./luminosity');

module.exports = function hsl(rgb) {
    return [hue(rgb), saturation(rgb), luminosity(rgb)];
};

module.exports.invert = function rgb(hsl) {
    if (!hsl[1]) return [hsl[2] * 255, hsl[2] * 255, hsl[2] * 255];
    var h = hsl[0] / 360, s = hsl[1], l = hsl[2],
        t2 = (l < 0.5) ? l * (1+s) : l+s-l*s,
        t1 = 2 * l - t2,
        t3 = [h + 1/3, h, h - 1/3];

    return t3.map(component).map(function(_) { return _ * 255; });

    function component(t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (6 * t < 1) return t1 + (t2 - t1) * 6 * t;
        else if (2 * t < 1) return t2;
        else if (3 * t < 2) return t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
        else return t1;
    }
};

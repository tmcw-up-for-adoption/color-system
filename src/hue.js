module.exports = function hue(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });

    var r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min;

    if (r == max) {
        h = 60 * ((g - b) / delta);
    } else if (g == max) {
        h = 60 * (2 + (b - r) / delta);
    } else if (b == max) {
        h = 60 * (4 + (r - g) / delta);
    }

    return h < 0 ? h + 360 : h;
};

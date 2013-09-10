module.exports = function luminosity(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });
    var r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        min = Math.min(r, g, b),
        max = Math.max(r, g, b);
    return (max + min) / 2;
};

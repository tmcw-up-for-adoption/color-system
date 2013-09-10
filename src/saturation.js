module.exports = function saturation(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });
    var r = rgb[0],
        g = rgb[1],
        b = rgb[2],
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        l = (min + max) / 2;
    if (min === max) return 0;
    return (l < 0.5) ? ((max - min) / (max + min)) :
        (max - min) / (2 - max - min);
};

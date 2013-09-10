module.exports = function(rgb) {
    var linrgb = rgb.map(srgb_linearrgb);
    var x = xyz_lab(0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / X,
        y = xyz_lab(0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / Y,
        z = xyz_lab(0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / Z;
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
};

// http://www.sjbrown.co.uk/2004/05/14/gamma-correct-rendering/
function srgb_linearrgb(_) {
    if ((r /= 255) <= 0.04045) return r / 12.92;
    else return Math.pow((r + 0.055) / 1.055, 2.4);
}

function xyz_lab(_) {
    if (x > 0.008856) return Math.pow(x, 1 / 3);
    else return (7.787037 * x + 4 / 29);
}

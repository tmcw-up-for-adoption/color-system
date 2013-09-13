module.exports = function(rgb) {
    var xyz = rgb.map(srgb_linearrgb);
    return [
        ((xyz[0] * 0.4124) + (xyz[1] * 0.3576) + (xyz[2] * 0.1805)) * 100,
        ((xyz[0] * 0.2126) + (xyz[1] * 0.7152) + (xyz[2] * 0.0722)) * 100,
        ((xyz[0] * 0.0193) + (xyz[1] * 0.1192) + (xyz[2] * 0.9505)) * 100];
};

// http://www.sjbrown.co.uk/2004/05/14/gamma-correct-rendering/
function srgb_linearrgb(_) {
    if ((_ /= 255) <= 0.04045) return _ / 12.92;
    else return Math.pow((_ + 0.055) / 1.055, 2.4);
}

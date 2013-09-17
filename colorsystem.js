(function(e){if("function"==typeof bootstrap)bootstrap("colorsystem",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeColorSystem=e}else"undefined"!=typeof window?window.colorSystem=e():global.colorSystem=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports.hue = require('./src/hue');
module.exports.saturation = require('./src/saturation');
module.exports.lightness = require('./src/lightness');
module.exports.lab = require('./src/lab');
module.exports.hsl = require('./src/hsl');
module.exports.xyz = require('./src/xyz');
module.exports.hsv = require('./src/hsv');
module.exports.cmyk = require('./src/cmyk');
module.exports.rgb_linear = require('./src/rgb_linear');

},{"./src/hue":2,"./src/saturation":3,"./src/lightness":4,"./src/lab":5,"./src/hsl":6,"./src/xyz":7,"./src/hsv":8,"./src/cmyk":9,"./src/rgb_linear":10}],7:[function(require,module,exports){
// # [CIE XYZ Color Space](http://en.wikipedia.org/wiki/CIE_1931_color_space)
//
// The first perceptual, mathematically derived color space.
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

},{}],10:[function(require,module,exports){
// # Linear RGB
//
// RGB triplets are [stored in sRGB](http://en.wikipedia.org/wiki/SRGB) and
// converted to and from linear values on the fly. THis conversion compensates
// for a non-linear conversion including gamma.
module.exports = function srgb_linearrgb(rgb) {
    return rgb.map(function(_) {
        _ /= 255;
        if (_ <= 0.04045) return _ / 12.92;
        else return Math.pow((_ + 0.055) / 1.055, 2.4);
    });
};

},{}],2:[function(require,module,exports){
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
        delta = max - min;

    // compute the angle from the most dominate color direction to its
    // location between the other two colors
    if (r == max) {
        h = 60 * ((g - b) / delta);
    } else if (g == max) {
        h = 60 * (2 + (b - r) / delta);
    } else if (b == max) {
        h = 60 * (4 + (r - g) / delta);
    }

    // clamp the output to ensure that invalid hues are not output
    return math.degreeClamp(h);
};

},{"./math":11}],3:[function(require,module,exports){
var math = require('./math');

// # [Saturation](http://bit.ly/1f0wzW7)
//
// The saturation of a color is determined by a combination of light
// intensity and how much it is distributed across the spectrum
// of different wavelengths.
module.exports = function saturation(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });

    var min = math.min(rgb),
        max = math.max(rgb);

    // all shades of grey, including white and black, have zero saturation.
    if (min === max) return 0;

    var l = (min + max) / 2;

    return (l < 0.5) ? ((max - min) / (max + min)) :
        (max - min) / (2 - max - min);
};

},{"./math":11}],4:[function(require,module,exports){
var math = require('./math');

// # Lightness
//
// color lightness, from the perspective of RGB - simply the average
// of the minimum and maximum components.
module.exports = function lightness(rgb) {
    rgb = rgb.map(function(r) { return r /= 255; });
    return (math.max(rgb) + math.min(rgb)) / 2;
};

},{"./math":11}],5:[function(require,module,exports){
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

},{"./constants":12,"./rgb_linear":10}],6:[function(require,module,exports){
var hue = require('./hue'),
    saturation = require('./saturation'),
    lightness = require('./lightness');

module.exports = function hsl(rgb) {
    return [hue(rgb), saturation(rgb), lightness(rgb)];
};

module.exports.invert = function rgb(hsl) {
    // if this HSL color has no saturation component, it's a shade of grey -
    // so it's simply composed of a grey corresponding to its luminosity value.
    if (!hsl[1]) return [hsl[2] * 255, hsl[2] * 255, hsl[2] * 255];

    // unpack the components for easier reference
    var h = hsl[0] / 360,
        s = hsl[1],
        l = hsl[2],
        t2 = (l < 0.5) ? l * (1 + s) : l + s - l * s,
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

},{"./hue":2,"./saturation":3,"./lightness":4}],8:[function(require,module,exports){
var hue = require('./hue'),
    saturation = require('./saturation'),
    value = require('./value');

// HSV Color: Hue, Saturation, Value
module.exports = function hsl(rgb) {
    return [hue(rgb), saturation(rgb), value(rgb)];
};

module.exports.invert = function rgb(hsv) {
    // if this HSL color has no saturation component, it's a shade of grey -
    // so it's simply composed of a grey corresponding to its luminosity value.
    if (!hsv[1]) return [hsv[2] * 255, hsv[2] * 255, hsv[2] * 255];

    var h = hsv[0] / 60,
        s = hsv[1],
        v = hsv[2] * 255;

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

},{"./hue":2,"./saturation":3,"./value":13}],9:[function(require,module,exports){
var math = require('./math');

// # [CMYK](http://en.wikipedia.org/wiki/CMYK_color_model)
//
// Is a substractive color model, used in printing. As opposed to additive
// color models like RGB, the combination of the colors in ink forms primaries,
//
//     Y + M = R
//     Y + C = G
//     M + C = B
module.exports = function(rgb) {
    if (math.max(rgb) === 0) return [0, 0, 0, 1];

    // The `key` color is the darkest in the RGB triplet. The intensity
    // of other colors is based on this single factor.
    var key = math.min(rgb) / 255,
        inv_key = 1 - key;

    rgb = rgb.map(function(_) { return ((1 - (_ / 255)) - key) / inv_key; });

    // CMYK colors are represented by a 4-number array with values
    // from 0-1
    return [
        rgb[0],
        rgb[1],
        rgb[2],
        key
    ];
};

},{"./math":11}],11:[function(require,module,exports){
// a few tricks to make math simpler and easier. This trick
// originates with [Prototype](http://ejohn.org/blog/fast-javascript-maxmin/)
module.exports.min = function(a) {
    return Math.min.apply(Math, a);
};

module.exports.max = function(a) {
    return Math.max.apply(Math, a);
};

module.exports.clamp = function(_, min, max) {
    return Math.min(Math.max(_, min), max);
};

// ensure that degrees wrap around negative and >360 values
module.exports.degreeClamp = function(_) {
    while (_ < 0) _ += 360;
    return _ % 360;
};

},{}],12:[function(require,module,exports){
module.exports = {

    // Corresponds roughly to RGB brighter/darker
    K: 18,

    // D65 standard referent
    X: 0.950470,
    Y: 1,
    Z: 1.088830

};

},{}],13:[function(require,module,exports){
var math = require('./math');

module.exports = function value(rgb) {
    return math.max(rgb) / 255;
};

},{"./math":11}]},{},[1])(1)
});
;
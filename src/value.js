module.exports = function value(rgb) {
    return Math.max(rgb[0], rgb[1], rgb[2]) / 255;
};

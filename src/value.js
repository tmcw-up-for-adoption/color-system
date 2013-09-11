var math = require('./math');

module.exports = function value(rgb) {
    return math.max(rgb) / 255;
};

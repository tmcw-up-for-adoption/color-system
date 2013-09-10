var hue = require('./hue'),
    saturation = require('./saturation'),
    value = require('./value');

module.exports = function hsl(rgb) {
    return [hue(rgb), saturation(rgb), value(rgb)];
};

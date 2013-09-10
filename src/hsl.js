var hue = require('./hue'),
    saturation = require('./saturation'),
    luminosity = require('./luminosity');

module.exports = function hsl(rgb) {
    return [hue(rgb), saturation(rgb), luminosity(rgb)];
};

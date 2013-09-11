[![Build Status](https://travis-ci.org/tmcw/color-system.png)](https://travis-ci.org/tmcw/color-system)

# color-system

Convert and compute in color systems (RGB, HSV, HSL, LAB, XYZ, LCH)

## usage

in [node.js](http://nodejs.org/)

    npm install color-system

in browsers

    wget https://raw.github.com/tmcw/color-system/master/colorsystem.js

## api

```
hsv(rgb) -> hsv
hsv.invert(hsv) -> rgb

hsl(rgb) -> hsl
hsl.invert(hsl) -> rgb

hue(rgb) -> hue
saturation(rgb) -> saturation
lightness(rgb) -> lightness
```

## example

```js
var colorsys = require('color-system');

colorsys.hsl([0, 0, 0]); // [r, g, b] => [h, s, l]
colorsys.hsv([0, 0, 0]); // [r, g, b] => [h, s, v]
```

## development

build docs & standalone for browsers:

    npm run-script make

## see also

'full solutions'

* [color-convert](https://github.com/harthur/color-convert) (js)
* [chroma.js](https://github.com/gka/chroma.js) (coffee)
* [chromatist](https://github.com/jrus/chromatist) (coffee)

'modules'

* [deuteranopia](https://github.com/tmcw/deuteranopia)
* [wcag-contrast](https://github.com/tmcw/wcag-contrast)
* [relative-luminance](https://github.com/tmcw/relative-luminance)
* [css-color-parser-js](https://github.com/deanm/css-color-parser-js)

## why

'Why write yet another JavaScript color library?'

* This is written in vanilla, idiomatic _JavaScript_
* It aims to be literate like [simple-statistics](https://github.com/tmcw/simple-statistics) and to remove and explain
  the 'magic numbers' that rule color math
* This aims to do _just color systems_ - other concerns in other modules

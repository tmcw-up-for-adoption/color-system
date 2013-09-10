[![Build Status](https://travis-ci.org/tmcw/color-system.png)](https://travis-ci.org/tmcw/color-system)

# color-system

Convert and compute in color systems (RGB, HSV, HSL, LAB, XYZ, LCH)

## usage

    npm install color-system

## api

```
hsv(rgb) -> hsv
hsv.invert(hsv) -> rgb

hsl(rgb) -> hsl
hsl.invert(hsl) -> rgb
```

## example

```js
var colorsys = require('color-system');

colorsys.hsl([0, 0, 0]); // [r, g, b] => [h, s, l]
colorsys.hsv([0, 0, 0]); // [r, g, b] => [h, s, v]
```

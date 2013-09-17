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

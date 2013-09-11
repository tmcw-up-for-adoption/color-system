// a few tricks to make math simpler and easier. This trick
// originates with [Prototype](http://ejohn.org/blog/fast-javascript-maxmin/)

module.exports.min = function(a) {
    return Math.min.apply(Math, a);
};

module.exports.max = function(a) {
    return Math.max.apply(Math, a);
};

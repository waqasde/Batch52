var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + ' the Great'; });
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Original array of magician names
var originalMagicians = ['David Copperfield', 'Penn and Teller', 'Houdini'];
// Creating a copy of the original array and modifying it
var greatMagicians = make_great(__spreadArray([], originalMagicians, true));
// Showing the original array
console.log('Original Magicians:');
show_magicians(originalMagicians);
// Showing the modified array
console.log('Great Magicians:');
show_magicians(greatMagicians);

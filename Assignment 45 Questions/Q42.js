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
var magicians = ['David Copperfield', 'Penn and Teller', 'Houdini'];
// Modifying the magicians array
var greatMagicians = make_great(magicians);
// Showing the modified array
show_magicians(greatMagicians);

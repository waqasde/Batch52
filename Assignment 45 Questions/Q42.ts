function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + ' the Great');
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician names
let magicians: string[] = ['David Copperfield', 'Penn and Teller', 'Houdini'];

// Modifying the magicians array
let greatMagicians = make_great(magicians);

// Showing the modified array
show_magicians(greatMagicians);

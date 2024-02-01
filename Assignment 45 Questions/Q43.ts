function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + ' the Great');
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician names
let originalMagicians: string[] = ['David Copperfield', 'Penn and Teller', 'Houdini'];

// Creating a copy of the original array and modifying it
let greatMagicians = make_great([...originalMagicians]);

// Showing the original array
console.log('Original Magicians:');
show_magicians(originalMagicians);

// Showing the modified array
console.log('Great Magicians:');
show_magicians(greatMagicians);

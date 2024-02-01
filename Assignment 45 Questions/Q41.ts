function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
let magicians: string[] = ['David Copperfield', 'Penn and Teller', 'Houdini'];

// Passing the array to the function
show_magicians(magicians);

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The size of the shirt is ${size} and it says '${message}'.`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt('Medium');

// Making a shirt of another size with a different message
make_shirt('Small', 'Allah Save Palestine');

function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The size of the shirt is ".concat(size, " and it says '").concat(message, "'."));
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt('Medium');
// Making a shirt of another size with a different message
make_shirt('Small', 'Allah Save Palestine');

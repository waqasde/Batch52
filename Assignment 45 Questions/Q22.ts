// List of languages
let languages: string[] = ["English", "Spanish", "Mandarin", "French", "Arabic"];

// Intentionally accessing an index that doesn't exist to produce an error
console.log("Trying to access a non-existing index:");
console.log(languages[10]); // This will be undefined, not technically an index error in JavaScript/TypeScript
// Correcting the error by accessing a valid index
console.log("Accessing a valid index:");
console.log(languages[4]); // This will correctly print "Arabic"

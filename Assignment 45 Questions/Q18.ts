// Store locations in an array
let locations: string[] = ["Saudia", "Turkey", "Iceland", "Norway", "USA"];

// Print the array in its original order
console.log("Original order:", locations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...locations].sort());

// Show that the array is still in its original order
console.log("Original order confirmed:", locations);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...locations].sort().reverse());

// Show that the array is still in its original order
console.log("Original order confirmed again:", locations);

// Reverse the order of the list
locations.reverse();
console.log("Reversed order:", locations);

// Reverse the order of the list again to return to the original order
locations.reverse();
console.log("Back to original order:", locations);

// Sort the array in alphabetical order
locations.sort();
console.log("Alphabetical order (modified list):", locations);

// Sort the array in reverse alphabetical order
locations.sort().reverse();
console.log("Reverse alphabetical order (modified list):", locations);

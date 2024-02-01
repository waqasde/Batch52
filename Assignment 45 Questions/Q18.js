var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store locations in an array
var locations = ["Saudia", "Turkey", "Iceland", "Norway", "USA"];
// Print the array in its original order
console.log("Original order:", locations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], locations, true).sort());
// Show that the array is still in its original order
console.log("Original order confirmed:", locations);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse());
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

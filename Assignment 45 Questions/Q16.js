// Initially updated guest list after finding a bigger dinner table
var guestList = ["John Cena", "King Suleman", "Maverick"];
console.log("Great news! I found a bigger dinner table, so we can invite more guests.");
// Add a new guest to the beginning of the array
guestList.unshift("Elon Musk");
// Calculate the middle of the array to add a new guest
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Steve Jobs");
// Add a new guest to the end of the list using push, which is similar to append in other languages
guestList.push("Ali");
// Print a new set of invitation messages
console.log("\nNew Invitation List:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be thrilled if you could join me for dinner."));
});

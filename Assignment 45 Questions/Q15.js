// Original list of people to invite to dinner
var guestList = ["John Cena", "King Suleman", "Maverick"];
// Print original invitations
console.log("Original Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored if you could join me for dinner."));
});
// Let's assume King Suleman can't make it
var unavailableGuest = "King Suleman";
console.log("\nUnfortunately, ".concat(unavailableGuest, " can't make it to the dinner."));
// Replace the unavailable guest with a new guest
var newGuest = "Ali";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;
// Print a second set of invitation messages
console.log("\nNew Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored if you could join me for dinner."));
});

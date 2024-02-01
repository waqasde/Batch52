// List of people to invite to dinner
var guestList = ["John Cena", "King Suleman", "Maverick"];
// Print an invitation message to each person
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored if you could join me for dinner."));
});

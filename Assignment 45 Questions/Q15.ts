// Original list of people to invite to dinner
let guestList: string[] = ["John Cena", "King Suleman", "Maverick"];

// Print original invitations
console.log("Original Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
});

// Let's assume King Suleman can't make it
let unavailableGuest: string = "King Suleman";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.`);

// Replace the unavailable guest with a new guest
let newGuest: string = "Ali";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;

// Print a second set of invitation messages
console.log("\nNew Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored if you could join me for dinner.`);
});

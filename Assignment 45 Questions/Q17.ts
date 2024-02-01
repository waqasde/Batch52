// Guest list from the previous exercise
// Initially updated guest list after finding a bigger dinner table
let guestList: string[] = ["John Cena", "King Suleman", "Maverick", "Elon Musk", "Steve Jobs","Ali"];
console.log("Unfortunately, my new dinner table won’t arrive in time, and I can only invite two guests to dinner.");

// Removing guests until only two remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log(`I'm sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Message to the remaining guests
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Remove the last two names from your list, so you have an empty list
guestList.length = 0; // This effectively clears the array

// Print the list to make sure it's empty
console.log("Current guest list:", guestList);

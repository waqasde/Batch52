let currentUsers: string[] = ['user1', 'zegam', 'admin', 'user3', 'john'];
let newUsers: string[] = ['user5', 'Admin', 'user6', 'zegam', 'john'];
for (let i = 0; i < newUsers.length; i++) {
    let newUser = newUsers[i];
    let isAvailable = true;

    for (let j = 0; j < currentUsers.length; j++) {
        if (currentUsers[j].toLowerCase() === newUser.toLowerCase()) {
            isAvailable = false;
            break;
        }
    }

    if (isAvailable) {
        console.log(`${newUser} is available.`);
    } else {
        console.log(`${newUser} will need to enter a new username.`);
    }
}
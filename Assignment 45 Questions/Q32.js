var currentUsers = ['user1', 'zegam', 'admin', 'user3', 'john'];
var newUsers = ['user5', 'Admin', 'user6', 'zegam', 'john'];
for (var i = 0; i < newUsers.length; i++) {
    var newUser = newUsers[i];
    var isAvailable = true;
    for (var j = 0; j < currentUsers.length; j++) {
        if (currentUsers[j].toLowerCase() === newUser.toLowerCase()) {
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("".concat(newUser, " is available."));
    }
    else {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
}

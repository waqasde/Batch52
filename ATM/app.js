"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var users = [
    { userId: 'user1', pin: '1234', balance: 1000 },
    { userId: 'user2', pin: '5678', balance: 1500 }
    // Add more users as needed
];
function authenticate(userId, pin) {
    return users.find(function (user) { return user.userId === userId && user.pin === pin; });
}
function checkBalance(user) {
    console.log("Your current balance is $".concat(user.balance));
}
function deposit(user) {
    var amount = parseFloat(readlineSync.question('Enter amount to deposit: '));
    if (!isNaN(amount) && amount > 0) {
        user.balance += amount;
        console.log("Deposited $".concat(amount, ". New balance is $").concat(user.balance));
    }
    else {
        console.log('Invalid amount');
    }
}
function withdraw(user) {
    var amount = parseFloat(readlineSync.question('Enter amount to withdraw: '));
    if (!isNaN(amount) && amount > 0 && amount <= user.balance) {
        user.balance -= amount;
        console.log("Withdrew $".concat(amount, ". New balance is $").concat(user.balance));
    }
    else {
        console.log('Invalid amount or insufficient balance');
    }
}
function main() {
    var userId = readlineSync.question('Enter user ID: ');
    var pin = readlineSync.question('Enter PIN: ', { hideEchoBack: true });
    var user = authenticate(userId, pin);
    if (user) {
        console.log('Login successful');
        var option = void 0;
        do {
            console.log('1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit');
            option = readlineSync.question('Choose an option: ');
            switch (option) {
                case '1':
                    checkBalance(user);
                    break;
                case '2':
                    deposit(user);
                    break;
                case '3':
                    withdraw(user);
                    break;
            }
        } while (option !== '4');
    }
    else {
        console.log('Invalid user ID or PIN');
    }
}
main();

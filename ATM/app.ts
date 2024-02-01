import * as readlineSync from 'readline-sync';

// Simulated database of user accounts
interface UserAccount {
    userId: string;
    pin: string;
    balance: number;
}

const users: UserAccount[] = [
    { userId: 'user1', pin: '1234', balance: 1000 },
    { userId: 'user2', pin: '5678', balance: 1500 }
    // Add more users as needed
];

function authenticate(userId: string, pin: string): UserAccount | undefined {
    return users.find(user => user.userId === userId && user.pin === pin);
}

function checkBalance(user: UserAccount): void {
    console.log(`Your current balance is $${user.balance}`);
}

function deposit(user: UserAccount): void {
    const amount = parseFloat(readlineSync.question('Enter amount to deposit: '));
    if (!isNaN(amount) && amount > 0) {
        user.balance += amount;
        console.log(`Deposited $${amount}. New balance is $${user.balance}`);
    } else {
        console.log('Invalid amount');
    }
}

function withdraw(user: UserAccount): void {
    const amount = parseFloat(readlineSync.question('Enter amount to withdraw: '));
    if (!isNaN(amount) && amount > 0 && amount <= user.balance) {
        user.balance -= amount;
        console.log(`Withdrew $${amount}. New balance is $${user.balance}`);
    } else {
        console.log('Invalid amount or insufficient balance');
    }
}

function main(): void {
    const userId = readlineSync.question('Enter user ID: ');
    const pin = readlineSync.question('Enter PIN: ', { hideEchoBack: true });

    const user = authenticate(userId, pin);

    if (user) {
        console.log('Login successful');
        let option: string;
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
    } else {
        console.log('Invalid user ID or PIN');
    }
}

main();

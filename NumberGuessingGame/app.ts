import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function startGame() {
    const randomNumber = generateRandomNumber(1, 100); // Random number between 1 and 100
    let attempts = 0;

    while (true) {
        const guess = await askQuestion("Guess the number (1-100): ");
        attempts++;

        if (parseInt(guess) === randomNumber) {
            console.log(`Correct! The number was ${randomNumber}.`);
            console.log(`You guessed it in ${attempts} attempts.`);
            break;
        } else if (parseInt(guess) < randomNumber) {
            console.log("Too low!");
        } else {
            console.log("Too high!");
        }
    }

    rl.close();
}

startGame();

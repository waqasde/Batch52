function determineLifeStage(age: number): string {
    if (age < 2) {
        return "This person is a baby.";
    } else if (age < 4) {
        return "This person is a toddler.";
    } else if (age < 13) {
        return "This person is a kid.";
    } else if (age < 20) {
        return "This person is a teenager.";
    } else if (age < 65) {
        return "This person is an adult.";
    } else {
        return "This person is an elder.";
    }
}

// Example usage
const age = 19; // You can change this value to test different ages
console.log(determineLifeStage(age));

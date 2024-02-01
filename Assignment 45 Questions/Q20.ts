// List of languages
let languages: string[] = ["English", "Spanish", "Mandarin", "French", "Arabic"];

// List of mountains
let mountains: string[] = ["Everest", "K2", "Denali", "Kilimanjaro", "Elbrus"];

// List of rivers
let rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];

// List of countries
let countries: string[] = ["United States", "China", "India", "France", "Brazil"];

// List of cities
let cities: string[] = ["New York", "Beijing", "Mumbai", "Paris", "São Paulo"];

// Function to print lists
function printList(category: string, items: string[]): void {
    console.log(`List of ${category}:`);
    items.forEach(item => console.log(item));
    console.log(""); // Add a blank line for better readability
}

// Print each list
printList("Languages", languages);
printList("Mountains", mountains);
printList("Rivers", rivers);
printList("Countries", countries);
printList("Cities", cities);

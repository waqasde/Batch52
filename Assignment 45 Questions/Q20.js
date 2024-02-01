// List of languages
var languages = ["English", "Spanish", "Mandarin", "French", "Arabic"];
// List of mountains
var mountains = ["Everest", "K2", "Denali", "Kilimanjaro", "Elbrus"];
// List of rivers
var rivers = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];
// List of countries
var countries = ["United States", "China", "India", "France", "Brazil"];
// List of cities
var cities = ["New York", "Beijing", "Mumbai", "Paris", "São Paulo"];
// Function to print lists
function printList(category, items) {
    console.log("List of ".concat(category, ":"));
    items.forEach(function (item) { return console.log(item); });
    console.log(""); // Add a blank line for better readability
}
// Print each list
printList("Languages", languages);
printList("Mountains", mountains);
printList("Rivers", rivers);
printList("Countries", countries);
printList("Cities", cities);

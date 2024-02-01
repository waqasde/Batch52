// Store the person's name in a variable
var MyName = "Waqas Ahmad";
// Print name in lowercase
console.log(MyName.toLowerCase());
// Print the name in uppercase
console.log(MyName.toUpperCase());
// Print the name in title case
console.log(toTitleCase(MyName));
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

// Define a TypeScript object for a geographical location profile
var locationProfile = {
    country: "India",
    capital: "Dehli",
    language: "Hindi",
    majorRiver: "Ganga",
    significantMountain: "Kanchenjunga"
};
// Function to display the profile information
function displayLocationProfile(profile) {
    console.log("Geographical Location Profile:");
    console.log("Country: ".concat(profile.country));
    console.log("Capital: ".concat(profile.capital));
    console.log("Primary Language: ".concat(profile.language));
    console.log("Major River: ".concat(profile.majorRiver));
    console.log("Significant Mountain: ".concat(profile.significantMountain));
}
// Display the geographical location profile
displayLocationProfile(locationProfile);

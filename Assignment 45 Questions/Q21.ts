// Define a TypeScript object for a geographical location profile
let locationProfile = {
    country: "India",
    capital: "Dehli",
    language: "Hindi",
    majorRiver: "Ganga",
    significantMountain: "Kanchenjunga"
};

// Function to display the profile information
function displayLocationProfile(profile: { country: string; capital: string; language: string; majorRiver: string; significantMountain: string }): void {
    console.log("Geographical Location Profile:");
    console.log(`Country: ${profile.country}`);
    console.log(`Capital: ${profile.capital}`);
    console.log(`Primary Language: ${profile.language}`);
    console.log(`Major River: ${profile.majorRiver}`);
    console.log(`Significant Mountain: ${profile.significantMountain}`);
}

// Display the geographical location profile
displayLocationProfile(locationProfile);
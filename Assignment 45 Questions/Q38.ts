function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for different cities
describe_city('Karachi');
describe_city('Lahore');
describe_city('Paris', 'France');

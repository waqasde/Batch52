function car_info(manufacturer: string, modelName: string, options: { [key: string]: any }): { [key: string]: any } {
    let car = { manufacturer, modelName };
    for (let option in options) {
        car[option] = options[option];
    }
    return car;
}

// Calling the function with required information and additional options
let car1 = car_info('Tesla', 'Model S', { color: 'red', autopilot: true });
console.log(car1);

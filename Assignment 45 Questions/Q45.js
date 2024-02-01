function car_info(manufacturer, modelName, options) {
    var car = { manufacturer: manufacturer, modelName: modelName };
    for (var option in options) {
        car[option] = options[option];
    }
    return car;
}
// Calling the function with required information and additional options
var car1 = car_info('Tesla', 'Model S', { color: 'red', autopilot: true });
console.log(car1);

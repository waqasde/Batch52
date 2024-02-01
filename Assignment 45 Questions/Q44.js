function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich will have: ".concat(items.join(', ')));
}
// Calling the function with different numbers of ingredients
make_sandwich('mushrooms', 'cheese');
make_sandwich('chicken', 'lettuce', 'tomato');
make_sandwich('roast beef', 'cheddar', 'onions', 'mayo');

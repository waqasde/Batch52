function make_sandwich(...items: string[]): void {
    console.log(`Your sandwich will have: ${items.join(', ')}`);
}

// Calling the function with different numbers of ingredients
make_sandwich('mushrooms', 'cheese');
make_sandwich('chicken', 'lettuce', 'tomato');
make_sandwich('roast beef', 'cheddar', 'onions', 'mayo');

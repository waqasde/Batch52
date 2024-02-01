var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var ordinal = void 0;
    switch (numbers[i]) {
        case 1:
            ordinal = '1st';
            break;
        case 2:
            ordinal = '2nd';
            break;
        case 3:
            ordinal = '3rd';
            break;
        default:
            ordinal = numbers[i] + 'th';
    }
    console.log(ordinal);
}

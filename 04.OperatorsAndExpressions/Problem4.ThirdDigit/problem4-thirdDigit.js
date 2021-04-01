function thirdDigit(args) {
    let result;
    let revertedString = args.split('').reverse().join('');

    if (revertedString.length < 3) {
        result = false + ' ' + 0;
    } else if (revertedString[2] !== '7') {
        result = false + ' ' + revertedString[2];
    } else {
        result = true;
    }
    return result;
}

thirdDigit('5');
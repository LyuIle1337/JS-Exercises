function divisibleBy7And5(args) {
    let result, number;
    if (args % 7 === 0 && args % 5 === 0) {
        number = args;
        result = 'true ' + number;
    } else {
        result = 'false ' + args;
    }
    return result;
}

divisibleBy7And5('140');
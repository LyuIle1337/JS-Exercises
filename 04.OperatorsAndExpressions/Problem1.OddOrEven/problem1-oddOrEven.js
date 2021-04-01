function solve(args) {
    let result;
    if (args % 2 === 0) {
        result = 'even ';
    } else {
        result = 'odd ';
    }
    result += args;
    return result;
}

solve(4);
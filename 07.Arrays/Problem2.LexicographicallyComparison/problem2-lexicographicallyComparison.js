function compare(args) {
    let result;
    let word1 = args[0];
    let word2 = args[1];

    if (word1 > word2) {
        result = '>';
    } else if (word1 < word2) {
        result = '<';
    } else {
        result = '=';
    }
    console.log(result);
}

compare(['food', 'food']);
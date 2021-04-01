function reverseString(words) {
    let result = '';
    let stringToBeReversed = words[0];
    for (let i = stringToBeReversed.length - 1; i >= 0; i--) {
        result += stringToBeReversed[i];
    }
    console.log(result);
}

reverseString(['sample']);
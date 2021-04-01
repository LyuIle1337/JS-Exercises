function biggestOfThreeNumbers(args) {
    let result;
    let firstNumber = parseFloat(args[0]);
    let secondNumber = parseFloat(args[1]);
    let thirdNumber = parseFloat(args[2]);

    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        result = firstNumber;
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        result = secondNumber;
    } else {
        result = thirdNumber;
    }
    console.log(result);
}

biggestOfThreeNumbers(['-0.1', '-0.5', '-1.1']);
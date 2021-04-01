function multiplicationSign(args) {
    let result;
    let firstNumber = parseFloat(args[0]);
    let secondNumber = parseFloat(args[1]);
    let thirdNumber = parseFloat(args[2]);
    let product = firstNumber * secondNumber * thirdNumber;

    if (product > 0) {
        result = '+';
    } else if (product < 0) {
        result = '-';
    } else {
        result = 0;
    }
    console.log(result);
}

multiplicationSign(['-1', '-0.5', '-5.1']);
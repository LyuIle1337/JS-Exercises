function sort3Numbers(args) {
    let result;
    let firstNumber = parseFloat(args[0]);
    let secondNumber = parseFloat(args[1]);
    let thirdNumber = parseFloat(args[2]);

    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        result = firstNumber + ' ';
        if (secondNumber >= thirdNumber) {
            result += secondNumber + ' ';
            result += thirdNumber;
        } else {
            result += thirdNumber + ' ';
            result += secondNumber;
        }
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        result = secondNumber + ' ';
        if (firstNumber >= thirdNumber) {
            result += firstNumber + ' ';
            result += thirdNumber;
        }
        else {
            result += thirdNumber + ' ';
            result += firstNumber;
        }
    } else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
        result = thirdNumber + ' ';
        if (firstNumber >= secondNumber) {
            result += firstNumber + ' ';
            result += secondNumber;
        } else {
            result += secondNumber + ' ';
            result += firstNumber;
        }
    }
    console.log(result)
}

sort3Numbers(['0', '-2.5', '5']);
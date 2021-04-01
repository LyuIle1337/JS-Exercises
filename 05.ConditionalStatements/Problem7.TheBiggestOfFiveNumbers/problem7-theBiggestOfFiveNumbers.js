function biggestOfFiveNumbers(args) {
    let result;
    let firstNumber = parseFloat(args[0]);
    let secondNumber = parseFloat(args[1]);
    let thirdNumber = parseFloat(args[2]);
    let fourthNumber = parseFloat(args[3]);
    let fifthNumber = parseFloat(args[4]);

    if (firstNumber >= secondNumber) {
        if (firstNumber >= thirdNumber) {
            if (firstNumber >= fourthNumber) {
                if (firstNumber >= fifthNumber) {
                    result = firstNumber;
                }
            }
        }
    }

    if (secondNumber >= firstNumber) {
        if (secondNumber >= thirdNumber) {
            if (secondNumber >= fourthNumber) {
                if (secondNumber >= fifthNumber) {
                    result = secondNumber;
                }
            }
        }
    }

    if (thirdNumber >= firstNumber) {
        if (thirdNumber >= secondNumber) {
            if (thirdNumber >= fourthNumber) {
                if (thirdNumber >= fifthNumber) {
                    result = thirdNumber;
                }
            }
        }
    }

    if (fourthNumber >= firstNumber) {
        if (fourthNumber >= secondNumber) {
            if (fourthNumber >= thirdNumber) {
                if (fourthNumber >= fifthNumber) {
                    result = fourthNumber;
                }
            }
        }
    }

    if (fifthNumber >= firstNumber) {
        if (fifthNumber >= secondNumber) {
            if (fifthNumber >= thirdNumber) {
                if (fifthNumber >= fourthNumber) {
                    result = fifthNumber;
                }
            }
        }
    }
    console.log(result);
}

biggestOfFiveNumbers(['-3', '-0.5', '-1.1', '-2', '-0.1']);
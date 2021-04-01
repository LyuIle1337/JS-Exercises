function exchangeIfGreater(args) {
    let firstNumber = parseFloat(args[0]);
    let secondNumber = parseFloat(args[1]);
    let result = firstNumber + ' ' + secondNumber;

    if (firstNumber > secondNumber) {
        result = secondNumber + ' ' + firstNumber;
    }
    console.log(result);
}

exchangeIfGreater(['5.5', '4.5']);
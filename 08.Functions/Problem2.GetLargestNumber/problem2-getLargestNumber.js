function getMax(num1, num2) {
    let largestNumber = 0;
    if (num1 >= num2) {
        largestNumber = num1
    } else if (num2 >= num1) {
        largestNumber = num2;
    }
    return largestNumber;
}
function getLargestNumber(args) {
    let firstNumber = args[0];
    let secondNumber = args[1];
    let thirdNumber = args[2];
    let largestNumber = getMax(firstNumber, secondNumber);
    let result = getMax(largestNumber, thirdNumber);
    console.log(result);
}

getLargestNumber([7, 19, 19]);
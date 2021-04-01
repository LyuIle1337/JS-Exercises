function firstLargerThanNeighbours(args) {
    let arrLength = args[0];
    args = args.slice(1);
    let result = 0;
    for (let i = 0; i < arrLength; i += 1) {
        let currentNumber = +args[i];
        let previousNumber = args[i - 1];
        let nextNumber = args[i + 1];

        if ((currentNumber > previousNumber) && (currentNumber > nextNumber)) {
            result = args.indexOf(currentNumber);
            break;
        }
    }
    return result;
}

console.log(firstLargerThanNeighbours([6, -26, -25, -28, 31, 2, 27]));
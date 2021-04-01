function largerThanNeighbours(args) {
    let arrLength = args[0];
    args = args.slice(1);
    let count = 0;
    for (let i = 0; i < arrLength; i += 1) {
        let currentNumber = +args[i];
        let previousNumber = args[i - 1];
        let nextNumber = args[i + 1];

        if ((currentNumber > previousNumber) && (currentNumber > nextNumber)) {
            count += 1;
        }
    }
    return count;
}

console.log(largerThanNeighbours([6, -26, -25, -28, 31, 2, 27]));
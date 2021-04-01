function binarySearch(args) {
    let number = args.pop();
    args.shift();
    args.sort(function (a, b) { return a - b });

    let start = 0;
    let end = args.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (args[middle] === number) {
            return middle;
        } else if (args[middle] < number) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch(['10', '32', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']));
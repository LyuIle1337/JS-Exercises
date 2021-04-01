function mmsaOfNumbers(args) {
    let min = 10000, max = -10000, sum = parseFloat(args[args.length - 1]), avg, result;
    for (let i = 0; i < args.length - 1; i++) {
        let currentNumber = parseFloat(args[i]);
        let nextNumber = parseFloat(args[i + 1]);
        sum += currentNumber;

        if (max <= currentNumber) {
            max = currentNumber;
        } else if (max <= nextNumber) {
            max = nextNumber;
        }

        if (min >= currentNumber) {
            min = currentNumber;
        } else if (min >= nextNumber) {
            min = nextNumber;
        }
    }
    avg = sum / args.length;
    result = `min=${min.toFixed(2)}\nmax=${max.toFixed(2)}\nsum=${sum.toFixed(2)}\navg=${avg.toFixed(2)}`;
    console.log(result);
}

mmsaOfNumbers(['2', '-1', '4']);
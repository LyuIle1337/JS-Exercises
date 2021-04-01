function mostFrequentNumber(args) {
    let count = 1;
    let maxCount = 1;
    let result = '';
    let maxElement;
    for (let i = 0; i < args.length; i++) {
        currentNumber = args[i];
        for (let j = i + 1; j < args.length; j++) {
            let nextNumber = args[j];
            if (nextNumber == currentNumber && currentNumber != maxElement) {
                count++;
            }
        }
        if (count >= maxCount) {
            maxCount = count;
            count = 1;
            maxElement = currentNumber;
            result = `${maxElement} (${maxCount} times)`;
        }
    }
    console.log(result);
}

mostFrequentNumber(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
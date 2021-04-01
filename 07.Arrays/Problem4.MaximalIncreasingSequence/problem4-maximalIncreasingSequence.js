function maximalIncreasingSequence(args) {
    let currentMax = 1;
    let max = currentMax;

    for (var i = 0; i < args.length - 1; i++) {
        if ((args[i + 1] - args[i]) === 1) {
            currentMax++;
            if (currentMax > max) {
                max = currentMax;
            }
        } else {
            currentMax = 1;
        }
    }
    console.log(max);
}
maximalIncreasingSequence(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
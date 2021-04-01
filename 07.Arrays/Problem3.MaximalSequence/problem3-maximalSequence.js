function maximalSequence(args) {
    let currentMax = 1;
    let max = currentMax;

    for (var i = 0; i < args.length - 1; i++) {
        if (args[i] === args[i + 1]) {
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
maximalSequence(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
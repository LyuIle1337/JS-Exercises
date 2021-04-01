function subsetWithSumS(array) {
    let sum = 14;
    function fork(i = 0, s = 0, t = []) {
        if (s === sum) {
            result.push(t);
            return;
        }
        if (i === array.length) {
            return;
        }
        if (s + array[i] <= sum) {
            fork(i + 1, s + array[i], t.concat(array[i]));
        }
        fork(i + 1, s, t);
    }
    var result = [];
    fork();
    console.log(result);
}

subsetWithSumS([2, 1, 2, 4, 3, 5, 2, 6]); // This problem was looked up. Nonetheless i debugged it in order to examine it.
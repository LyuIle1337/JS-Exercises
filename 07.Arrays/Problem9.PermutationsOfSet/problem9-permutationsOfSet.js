function permute(args) {
    let length = args.length;
    let result = [args.slice()];
    let c = new Array(length).fill(0);
    let i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = args[i];
            args[i] = args[k];
            args[k] = p;
            ++c[i];
            i = 1;
            result.push(args.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

console.log(permute([1, 2, 3]));
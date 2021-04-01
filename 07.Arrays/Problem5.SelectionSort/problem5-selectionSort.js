function selectionSort(args) {
    for (let i = 0; i < args.length; i++) {
        let min = i;
        for (let j = i + 1; j < args.length; j++) {
            if (args[j] < args[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = args[i];
            args[i] = args[min];
            args[min] = tmp;
        }
    }
    console.log(args);
}
selectionSort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);
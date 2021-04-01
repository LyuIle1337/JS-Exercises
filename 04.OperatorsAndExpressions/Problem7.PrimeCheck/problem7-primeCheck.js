function primeCheck(number) {
    let result;
    if (number < 2) {
        result = false;
    } else if (number == 2) {
        result = true;
    } else {
        let sqrtNumber = Math.floor(Math.sqrt(number));
        for (i = 2; i <= sqrtNumber; i++) {
            if (number % i == 0) {
                result = false;
                break;
            }
        }
        if (result === undefined) {
            result = true;
        }
    }
    return result;
}

primeCheck('857');
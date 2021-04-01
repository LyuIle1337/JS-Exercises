function maxPrime(num) {
    let maxPrime = 0;
    for (let i = 0; i <= num; i++) {
        let notPrime = false;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            if (maxPrime <= i) {
                maxPrime = i;
            }
        }
    }
    console.log(maxPrime);
}

maxPrime(23);
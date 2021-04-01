function numbersFromOneToN(args) {
    let number = parseInt(args[0]);
    let result = '1 ';

    for (let i = 2; i <= number; i++) {
        result += `${i} `;
    }
    console.log(result.trim());
}

numbersFromOneToN(['5']);
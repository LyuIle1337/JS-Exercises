function matrix(args) {
    let number = parseInt(args[0]);
    let result = '';
    let j;
    for (let i = 1; i <= number; i++) {
        let num = i + (number - 1);
        for (j = i; j < num; j++) {
            result += `${j} `;
        }
        result += `${j}\n`;
    }
    console.log(result);
}

matrix(['2']);
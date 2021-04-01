function getUserInput() {
    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
    });

    rl.question('', function (userInput) {
        trapezoidArea(userInput);
        rl.close();
    });
}

function trapezoidArea(trapezoidParams) {
    let paramsWithNoChars = trapezoidParams.replace(/[\[\]',]+/g, '').split(' ');
    let sideA = parseFloat(paramsWithNoChars[0]);
    let sideB = parseFloat(paramsWithNoChars[1]);
    let height = parseFloat(paramsWithNoChars[2]);

    let area = (sideA + sideB) / 2 * height;
    console.log(area.toFixed(7));
}

getUserInput();
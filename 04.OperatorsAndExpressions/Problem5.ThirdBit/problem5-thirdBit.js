function thirdBit(args) {
    let bits = (args >>> 0).toString(2);
    let reversedBits = bits.split('').reverse().join('');
    let result = reversedBits[2];
    console.log(result);
}

function getUserInput() {
    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
    });

    rl.question('', function (userInput) {
        thirdBit(userInput);
        rl.close();
    });
}

getUserInput();
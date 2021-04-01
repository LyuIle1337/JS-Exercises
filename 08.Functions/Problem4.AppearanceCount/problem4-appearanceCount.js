function getAppearanceCount(args) {
    let number = args.pop();
    args = args.slice(1);

    let index = args.indexOf(number);
    let result = 0;

    while (index >= 0) {
        result++;
        index = args.indexOf(number, index + 1)
    }
    return result;
}

function testGetAppearanceCount() {
    happyPathCase = getAppearanceCount([8, 28, 6, 21, 6, -7856, 73, 73, -56, 73]);
    if (happyPathCase === 2) {
        console.log(`getAppearanceCount works correctly. Returns ${happyPathCase}`)
    } else {
        console.log(`getAppearanceCount does not work correctly. Returns ${happyPathCase} buth the correct anwer is 2.`)
    }
}

testGetAppearanceCount();
function getSubStringInText(args) {
    let substring = args[0];
    let string = args[1];
    let count = 0;
    while (string.includes(substring)) {
        string = string.replace(substring, '');
        count++;
    }
    console.log(count);
}

getSubStringInText([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
])
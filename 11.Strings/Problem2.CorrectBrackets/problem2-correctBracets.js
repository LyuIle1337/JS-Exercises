function checkBrackets(str) {
    let result = 'Correct';
    str = str[0];
    var depth = 0;
    for (var i in str) {
        if (str[i] == '(') {
            depth++;
        } else if (str[i] == ')') {
            depth--;
        }
        if (depth < 0) {
            return false;
        }
    }
    if (depth > 0) {
        result = 'Incorrect'
    }
    console.log(result);
}

checkBrackets('((a+b)/5-d)');
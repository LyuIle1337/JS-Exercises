function isWordPalindrome(str) {
    let pattern = /[\W_]/;
    let lowRegStr = str.toLowerCase().replace(pattern, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

function doesTextContainPalindrome(text) {
    text = text.split(' ');
    return text.some(x => isWordPalindrome(x));
}

console.log(doesTextContainPalindrome('exe'));
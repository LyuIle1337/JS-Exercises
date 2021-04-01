function hexToDecimal(number) {
    var result = 0, digitValue;
    number = number[0].toLowerCase();
    for (var i = 0; i < number.length; i++) {
        digitValue = '0123456789abcdef'.indexOf(number[i]);
        result = result * 16 + digitValue;
    }
    console.log(result);
}

hexToDecimal(['4ED528CBB4']);
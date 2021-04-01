function digitAsWord(number) {
    let result;
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    number = +number;

    if (number >= 0 && number <= 9) {
        result = digits[number];
    } else if (number >= 10 && number <= 19) {
        result = teens[number - 10];
    } else if (number >= 20 && number <= 99) {
        let firstDig = Math.floor(number / 10);
        let secondDig = number % 10;
        result = tens[firstDig] + ' ' + digits[secondDig];
    } else if (number >= 100 && number <= 999) {
        firstDig = Math.floor(number / 100);
        secondDig = Math.floor((number % 100) / 10);
        let thirdDig = number % 10;
        if (secondDig > 1) {
            if (thirdDig > 0) {
                result = digits[firstDig] + ' hundred ' + 'and ' + tens[secondDig] + ' ' + digits[thirdDig];
            } else {
                result = digits[firstDig] + ' hundred ' + 'and ' + tens[secondDig];
            }
        }
        else if (secondDig == 0) {
            if (thirdDig == 0) {
                result = digits[firstDig] + ' ' + 'hundred';
            }
            result = digits[firstDig] + ' hundred ' + 'and ' + digits[thirdDig];
        } else {
            result = digits[firstDig] + ' hundred ' + 'and ' + teens[thirdDig];
        }
    }

    result = result.charAt(0).toUpperCase() + result.slice(1);
    console.log(result);
}
digitAsWord(['999']);
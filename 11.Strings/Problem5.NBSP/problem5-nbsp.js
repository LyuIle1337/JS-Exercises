function nbsp(args) {
    let str = args[0];
    while (str.includes(' ')) {
        str = str.replace(' ', '&nbsp');
    }
    console.log(str);
}

nbsp(['This text contains 4 spaces!!']);
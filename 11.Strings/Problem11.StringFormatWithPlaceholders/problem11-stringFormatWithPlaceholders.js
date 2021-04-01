function formatString(args) {
    let str = args[0];
    let replaces = args.splice(1, args.length);

    for (let i = 0; i < replaces.length; i++) {
        let placeholder = '{' + i + '}';
        while (str.includes(placeholder)) {
            str = str.replace(placeholder, replaces[i]);
        }
    }
    console.log(str);
}

formatString(['{0}, {1}, {0} text {2}', 1, 'Pesho', 'Gosho']);
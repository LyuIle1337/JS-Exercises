function replacePlaceHolders(json, str) {
    let pattern = /#{[\w]+}/gi;
    let matches = str.match(pattern);

    for (let i = 0; i < matches.length; i++) {
        if (str.includes(matches[i])) {
            let prop = matches[i].substring(2, matches[i].length - 1);
            if (json.hasOwnProperty(prop)) {
                str = str.replace(matches[i], json[prop]);
            }
        }
    }
    return str;
}

String.prototype.replacePlaceHolders = replacePlaceHolders;

function formatWIthPlaceholders(input) {
    let jsonText = input[0];
    let str = input[1];
    let json = JSON.parse(jsonText);
    str = str.replacePlaceHolders(json, str);
    console.log(str);
}

formatWIthPlaceholders([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);
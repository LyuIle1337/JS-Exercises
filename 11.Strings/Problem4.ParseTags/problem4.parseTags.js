function getResult(args) {
    let str = args[0];
    while (str.includes('<orgcase>') && str.includes('</orgcase>')) {
        str = str.replace('<orgcase>', '');
        str = str.replace('</orgcase>', '');
    }

    str = replaceTags(str);
    str = parseTags(str);
    console.log(str);
}

function replaceTags(text) {
    text = text.replace(/<\s*upcase\s*>/gi, '<U>');
    text = text.replace(/<\s*\/upcase\s*>/gi, '</U>');
    text = text.replace(/<\s*lowcase\s*>/gi, '<L>');
    text = text.replace(/<\s*\/lowcase\s*>/gi, '</L>');
    return text;
}

function parseTags(text) {
    let result = [];
    let charArray = text.split('');
    let tags = [];
    let openTag = false;
    let closeTag = false;

    for (var ind = 0; ind < charArray.length; ind++) {
        if (charArray[ind] === '<') {
            openTag = true;
            continue;
        }

        if (charArray[ind] === '/' && openTag) {
            closeTag = true;
            continue;
        }

        if (openTag && !closeTag && charArray[ind].match(/[a-z]/i)) {
            tags.push(charArray[ind]);
            continue;
        }

        if (charArray[ind] === '>') {
            if (closeTag) {
                tags.pop();
                closeTag = false;
            }
            openTag = false;
            continue;
        }

        if (!openTag) {
            if (!tags.length) {
                result.push(charArray[ind]);
            } else {
                if (tags[0] === 'L') {
                    result.push(charArray[ind].toLowerCase());
                } else if (tags[0] === 'U') {
                    result.push(charArray[ind].toUpperCase());
                }
            }
        }
    }
    return result.join('');
}

getResult(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anytHing</lowcase> else.']);
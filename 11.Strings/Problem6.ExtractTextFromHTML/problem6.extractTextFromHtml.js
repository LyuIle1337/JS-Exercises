function extractTextFromHtml(strings) {
    let result = '';
    let pattern = /<[^>]*>/gi;

    for (let i = 0; i < strings.length; i++) {
        let currentString = strings[i];
        let matches = currentString.match(pattern);
        if (matches !== null) {
            for (let j = 0; j < matches.length; j++) {
                currentString = currentString.replace(matches[j], '');
            }
        }
        currentString = currentString.trim();
        result += currentString;
    }
    result = result;
    console.log(result);
}

extractTextFromHtml(['<html>', '  <head>', '    <title>Sample site</title>', '  </head>', '  <body>', '    <div>text', '      <div>more text</div>',
    '      and more...', '    </div>', '    in body', '  </body>', '</html>']);
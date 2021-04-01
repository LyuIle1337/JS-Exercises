function removeElements(args) {
    Array.prototype.removeElementWithValue = function (element) {
        let index = args.indexOf(element);
        while (index >= 0) {
            args.splice(index, 1);
            index = args.indexOf(element);
        }
        return args.join('\n');
    }
    console.log(args.removeElementWithValue('\''));
}

removeElements([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]);

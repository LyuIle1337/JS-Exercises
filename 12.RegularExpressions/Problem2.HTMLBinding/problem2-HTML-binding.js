String.prototype.splice = function (start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};
String.prototype.htmlBind = htmlBind;

function htmlBind(html, json) {
    let dataBindPattern = /data-bind-\w+="\w+"/gi;
    let dataBindMatches = html.match(dataBindPattern);
    let bindResult = [];
    let content = dataBindMatches.shift();
    let contentProp = content.match(/"(\w+)"/);
    let endOfOpenTagIndex = html.indexOf('><');

    if (json.hasOwnProperty(contentProp[1])) {
        contentProp = json[contentProp[1]];
        html = html.splice(endOfOpenTagIndex + 1, 0, contentProp);
    }
    if (dataBindMatches.length > 0) {
        dataBindMatches = dataBindMatches.join(' ').replace(/data-bind-/g, '').split(', ');
        for (let i = 0; i < dataBindMatches.length; i++) {
            let props = dataBindMatches[i].match(/"(\w+)"/);
            if (json.hasOwnProperty(props[1])) {
                let prop1 = props[1];
                let jsonValue = json[prop1];
                let toBePushed = ' ' + dataBindMatches[i].replace(prop1, jsonValue)
                bindResult.push(toBePushed);
            }
        }
        html = html.splice(endOfOpenTagIndex, 0, bindResult);
    }
    return html;
}

function replacePlaceHoldersInHTMl(input) {
    let html = input[1];
    let json = JSON.parse(input[0]);
    html = html.htmlBind(html, json);
    console.log(html);
}

replacePlaceHoldersInHTMl([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);
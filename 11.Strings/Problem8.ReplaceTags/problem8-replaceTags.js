function replaceLinkTags(str) {
    let hrefRegex = /<a href="/gi;
    let closingA = /(">)(.*?)(<\/a>)/gi;
    let hrefMatches = str.match(hrefRegex);
    let closingAMatches = str.match(closingA);
    str = str.replace(hrefMatches[0], '[our site](');
    str = str.replace(hrefMatches[1], '[our forum](');
    str = str.replace(closingAMatches[0], ')');
    str = str.replace(closingAMatches[1], ')');

    console.log(str);
}

replaceLinkTags(`<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. 
Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>`);
function parseUrl(args) {
    let url = args[0];
    url = url.split('/');
    let protocol = 'protocol: ' + url[0];
    protocol = protocol.substring(0, protocol.length - 1)
    let server = 'server: ' + url[2];

    url.shift();
    url.shift();
    url.shift();

    let resource = 'resource: /' + url.join('/');

    console.log(protocol);
    console.log(server);
    console.log(resource);
}

parseUrl(['http://telerikacademy.com/Courses/Courses/Details/239']);
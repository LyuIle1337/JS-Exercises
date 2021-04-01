function getEmails(str) {
    str = str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/);
    console.log(str);
}

getEmails('test@test.com asdasdsadas test2@test.asd mkdaf a ');
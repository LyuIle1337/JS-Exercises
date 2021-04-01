function getYoungestPerson(people) {
    let peopleArray = populatePeopleArray(people);
    let youngestPerson = findYoungestPerson(peopleArray);
    let result = youngestPerson.firstName + ' ' + youngestPerson.lastName
    console.log(result);
}

function populatePeopleArray(peopleInfo) {
    let peopleArray = [];
    for (let i = 0; i < peopleInfo.length; i += 3) {
        let person = {
            firstName: peopleInfo[i],
            lastName: peopleInfo[i + 1],
            age: peopleInfo[i + 2]
        };
        peopleArray.push(person);
    }
    return peopleArray;
}

function findYoungestPerson(peopleArray) {
    let youngestPerson;
    for (let i = 0; i < peopleArray.length - 1; i++) {
        let currentPerson = peopleArray[i];
        let nextPerson = peopleArray[i + 1];

        if (currentPerson.hasOwnProperty('age') && currentPerson.age < nextPerson.age) {
            youngestPerson = currentPerson;
        }
    }
    return youngestPerson;
}

getYoungestPerson([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]);
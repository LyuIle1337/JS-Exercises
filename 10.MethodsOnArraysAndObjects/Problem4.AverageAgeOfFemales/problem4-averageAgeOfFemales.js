function generateHumans() {
    function populateArrayOfPeople() {
        let peopleArray = [];
        for (let i = 1; i <= 10; i++) {
            let randomAge = Math.floor((Math.random() * 420) + 1)
            let randomGender = Math.round(Math.random());
            randomGender = randomGender === 1 ? 'male' : 'female';
            peopleArray.push(createPerson(`firstName${i}`, `lastName${i}`, randomAge, randomGender))
        }
        return peopleArray;
    }

    function createPerson(firstName, lastName, age, gender) {
        person = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender
        };
        return person;
    }
    return populateArrayOfPeople();
}

function getAvgAgeOfFemales() {
    let people = generateHumans();
    let ageSum = 0;
    let count = 0;
    let result;
    females = people.filter(function (person) {
        return person.gender === 'female'
    });
    females.forEach(function (femalePerson) {
        ageSum += femalePerson.age;
        count += 1;
    });
    result = (ageSum / count).toFixed(2);
    console.log(`Average female persons age: ${result}`);
}

getAvgAgeOfFemales();
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

function getYoungestPerson() {
    let people = generateHumans();
    let lowestAge = 420;
    malePersons = people.filter(function (person) {
        return person.gender === 'male'
    });

    malePersons.forEach(function (male) {
        if (male.age < lowestAge) {
            lowestAge = male.age;
        }
    });

    let youngestMale = malePersons.find(function (male) {
        if (male.age === lowestAge) {
            return male;
        }
    });
    console.log(`${youngestMale.firstName} ${youngestMale.lastName}`)
}

getYoungestPerson();
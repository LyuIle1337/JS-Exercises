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

function checkIfPeopleAreLegal() {
    let people = generateHumans();
    function isLegal(person) {
        if (person.age > 18) {
            return true;
        } else {
            return false;
        }
    }

    let result;
    if (people.every(isLegal)) {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}

checkIfPeopleAreLegal();
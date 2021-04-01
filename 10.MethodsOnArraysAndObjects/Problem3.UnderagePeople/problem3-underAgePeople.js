function generateHumans() {
    function populateArrayOfPeople() {
        let peopleArray = [];
        for (let i = 1; i <= 10; i++) {
            let randomAge = Math.floor((Math.random() * 20) + 1)
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

function underAgePeople() {
    let people = generateHumans();
    let underAgePeople = people.filter(function (person) {
        return person.age < 18;
    });

    underAgePeople.forEach(function (person) {
        console.log(person);
    });
}

underAgePeople();
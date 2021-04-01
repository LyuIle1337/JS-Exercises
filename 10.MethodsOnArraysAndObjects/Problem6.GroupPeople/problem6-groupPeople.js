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

function groupByFirstLetterOfFirstName() {
    let peoples = generateHumans();
    let result = {};
    let firstLetter;
    let allLetters = 'absdefghijklmnopqrstuvwxyz';
    let lettersArray = allLetters.split('');

    lettersArray.forEach(function (letter) {
        peoples.reduce(function (arr, person) {
            firstLetter = person.firstName[0].toLowerCase();
            if (letter === firstLetter) {
                result[letter] = arr;
                arr.push(person);
            }
            return arr;
        }, []);
    });
    console.log(result);
}

groupByFirstLetterOfFirstName();
function groupPeopleByAge(people) {
    let result = {};
    let ages = getUniqueAges(people);
    let sameAgePople = [];

    for (let i = 0; i < ages.length; i++) {
        for (let person of people) {
            if (person.age === ages[i]) {
                sameAgePople.push(person);
            }
        }
        let propName = sameAgePople[0].age;
        result[`${propName}`] = sameAgePople;
        sameAgePople = [];
    }
    console.log(result);
}

function getUniqueAges(people) {
    let ages = [];
    for (let person of people) {
        if (!ages.includes(person.age)) {
            ages.push(person.age);
        }
    }
    return ages;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

groupPeopleByAge(people);
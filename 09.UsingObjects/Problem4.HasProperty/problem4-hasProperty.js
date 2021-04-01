function checkIfObjectHasProperty(object, prop) {
    if (object.hasOwnProperty(prop)) {
        return true;
    } else {
        return false;
    }
}

let testObj = 'test';
console.log(checkIfObjectHasProperty(testObj, 'length'));
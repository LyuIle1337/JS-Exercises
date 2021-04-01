function getLargestNumberInRange(index, array) {
    let result = 0;
    array = array.slice(index);
    result = Math.max(...array);
    return result;
}

function sortArray(array, isAscendingSort) {
    array = array.slice(1);
    let result = [];
    let i = 0;
    while (array.length > 0) {
        let currentLargest = getLargestNumberInRange(0, array);
        let indexOfCurrentLargest = array.indexOf(currentLargest);
        array.splice(indexOfCurrentLargest, 1);
        result[i] = currentLargest;
        i++;
    }
    if (isAscendingSort) {
        result.reverse();
    }
    console.log(result);
}

sortArray([6, 3, 4, 5, 4, 3, 2, 3, 1, 5, 2, 6], false)
function planarCoordinates(numbers) {
    let lines = buildLineArray(numbers);
    addLengthToLines(lines);
    let result = getResult(lines[0].triangleLength, lines[1].triangleLength, lines[2].triangleLength);
    console.log(result);
}

function buildLineArray(numbers) {
    let lines = [];
    let count = 0;
    for (let i = 0; i < numbers.length; i += 4) {
        lines[count] = {
            x: parseFloat(numbers[i]),
            y: parseFloat(numbers[i + 1]),
            x1: parseFloat(numbers[i + 2]),
            y2: parseFloat(numbers[i + 3])
        };
        count++;
    }
    return lines;
}

function addLengthToLines(lines) {

    for (let line of lines) {
        line.length = calculateLength(line);
    }
}

function calculateLength(line) {
    let point1 = line.x - line.x1;
    let point2 = line.y - line.y2;
    line.triangleLength = Math.sqrt(Math.pow(point1, 2) + Math.pow(point2, 2));
    return line;
}

function getResult(line1, line2, line3) {
    let result = `${line1.toFixed(2)}\n${line2.toFixed(2)}\n${line3.toFixed(2)}`;
    if ((line1 + line2) > line3 && (line1 + line3) > line2 && (line2 + line3) > line1) {
        result += '\nTriangle can be built';
    }
    result += '\nTriangle can not be built';
    return result;
}


planarCoordinates(['7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.5', '0', '-0.123'])



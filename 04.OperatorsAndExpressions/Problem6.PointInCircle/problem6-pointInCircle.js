function pointInCircle(args) {
    let result;
    let x = args[0];
    let y = args[1];
    let circleCenter = {
        x: 0,
        y: 0
    };
    let distance = Math.sqrt(Math.pow(x - circleCenter.x, 2) + Math.pow(y - circleCenter.y, 2));

    if (distance <= 2) {
        result = 'yes ';
    } else {
        result = 'no ';
    }
    result += distance.toFixed(2);
    return result;
}

pointInCircle(['-2', '0']);
function pointInCircleAndRectangle(args) {
    let result;
    let x1 = 1;
    let y1 = 1;
    let radius = 1.5;
    let rectTop = 1;
    let rectLeft = -1;
    let rectWidth = 6;
    let rectHeight = 2;

    let pointX = parseFloat(args[0]);
    let pointY = parseFloat(args[1]);

    let insideCircle = Math.pow((pointX - x1), 2) + Math.pow((pointY - y1), 2) <= Math.pow(radius, 2);
    let insideRectangle = (pointX >= rectLeft) && (pointX <= (rectLeft + rectWidth)) && (pointY >= (rectTop - rectHeight)) && (pointY <= rectTop);

    result = insideCircle ? "inside circle " : "outside circle ";
    result += insideRectangle ? "inside rectangle" : "outside rectangle";
    console.log(result);
}

pointInCircleAndRectangle(['1', '2']);
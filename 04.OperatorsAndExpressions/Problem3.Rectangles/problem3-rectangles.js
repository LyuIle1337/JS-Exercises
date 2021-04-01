function rectangles(args) {
    let width = parseFloat(args[0]);
    let height = parseFloat(args[1]);
    let result = (width * height).toFixed(2) + ' ' + ((width + height) * 2).toFixed(2);
    return result;
}

rectangles(['3', '4']);
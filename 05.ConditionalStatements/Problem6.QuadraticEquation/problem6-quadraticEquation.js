function quadraticEquation(args) {
    let result;
    let a = parseFloat(args[0]);
    let b = parseFloat(args[1]);
    let c = parseFloat(args[2]);

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        if(root2 < root1) {
            root2 = [root1, root1 = root2][0];
        }
        result = `x1=${root1.toFixed(2)}; x2=${root2.toFixed(2)}`;
    } else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        result = `x1=x2=${root1.toFixed(2)}`;
    } else {
        result = 'no real roots';
    }
    console.log(result);
}

quadraticEquation(['0.2', '9.572', '0.2']);
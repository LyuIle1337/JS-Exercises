function increaseArrayMembers(args) {
    let number = parseInt(args[0]);
    let result = new Array();
    for (let i = 0; i < number; i++) {
        result[i] = i * number;
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

increaseArrayMembers(['5']);
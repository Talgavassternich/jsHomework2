function getMathModule(x) {
    if (typeof x !== "number" || isNaN(x)) {
        throw "argument must be number";
    }
    let y = 4;
    return {
        sum: () => {
            return x + y;
        },
        substract: () => {
            return x - y;
        },
        multiply: () => {
            return x * y;
        },
        divide: () => {
            return x / y;
        }
    };
}
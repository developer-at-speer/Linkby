function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    const result = function() {
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return result;
    };
    result.toString = function() {
        return sum;
    };
    return result;
}

console.log(add(4)(6));
console.log(add(4, 6));

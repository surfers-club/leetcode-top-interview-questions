/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const absX = Math.abs(x);
    let reversed = Number(absX.toString().split("").reverse().join(""));
    if (absX !== x) reversed *= -1;
    return reversed < Math.pow(2, 31) * -1 || reversed >= Math.pow(2, 31)
        ? 0
        : reversed;
};

const digitMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
]);

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const l = digits.length;

    if (l === 0) return [];
    if (l === 1) return digitMap.get(digits);

    function discount(arr, i) {
        if (i < 0) return false;

        arr[i]++;
        if (arr[i] === digitMap.get(digits[i]).length) {
            arr[i] = 0;
            return discount(arr, i - 1);
        }
        return true;
    }

    const output = [];
    const pointers = Array(l).fill(0, 0);
    let item = "";
    let keepGoing = true;

    while (keepGoing) {
        for (let i = 0; i < l; i++) {
            item += digitMap.get(digits[i])[pointers[i]];
        }
        output.push(item);
        item = "";

        keepGoing = discount(pointers, l - 1);
    }

    return output;
};

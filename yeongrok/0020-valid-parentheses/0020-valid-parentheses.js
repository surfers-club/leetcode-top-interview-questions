/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
    ]);
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const pair = pairMap.get(s[i]);
        if (pair) {
            stack.push(pair);
        } else {
            const corresponded = stack.pop() === s[i];
            if (!corresponded) return false;
        }
    }
    
    return stack.length === 0;
};
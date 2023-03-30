const digitMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
]);

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const l = digits.length;

    if (l === 0) return [];
    if (l === 1) return digitMap.get(digits);

    let output = [];

    if (l === 2) {
        digitMap.get(digits[0]).forEach(a => {
            digitMap.get(digits[1]).forEach(b => {
                output.push(`${a}${b}`);
            })
        });
        return output;
    }
    
    if (l === 3) {
        digitMap.get(digits[0]).forEach(a => {
            digitMap.get(digits[1]).forEach(b => {
                digitMap.get(digits[2]).forEach(c => {
                    output.push(`${a}${b}${c}`);
                })
            })
        });
        return output;
    }
    
    if (l === 4) {
        digitMap.get(digits[0]).forEach(a => {
            digitMap.get(digits[1]).forEach(b => {
                digitMap.get(digits[2]).forEach(c => {
                    digitMap.get(digits[3]).forEach(d => {
                        output.push(`${a}${b}${c}${d}`);
                    })
                })
            })
        });
        return output;
    }

    return output;
};

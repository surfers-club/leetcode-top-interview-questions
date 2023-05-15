/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    const digitStrings = countAndSay(n-1);
    let accStr = "";

    for (let i = 0; i < digitStrings.length; i++) {
        let count = 1;
        while (i + 1 < digitStrings.length && digitStrings[i] === digitStrings[i + 1]) {
            count++;
            i++;
        }
        accStr += `${count}${digitStrings[i]}`;
    }
    return accStr;
};

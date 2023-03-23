/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let j = 0;
    for (let i = 1; i < strs.length; i++) {
        if (!prefix || !strs[i]) return "";

        j = 0;
        while (
            j <= prefix.length &&
            j <= strs[i].length &&
            prefix[j] === strs[i][j]
        ) {
            j++;
        }
        
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

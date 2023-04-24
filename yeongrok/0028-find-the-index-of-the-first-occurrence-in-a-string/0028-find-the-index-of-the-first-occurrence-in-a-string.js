/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) return -1;

    let curr = 0;
    let char = needle[curr];
    let output = -1;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === char) {
            if (curr === 0) output = i;
            curr++;
        } else {
            if (curr !== 0) i = output;
            output = -1;
            curr = 0;
        }

        if (curr === needle.length) {
            return output;
        }
        char = needle[curr];
    }

    return -1;
};
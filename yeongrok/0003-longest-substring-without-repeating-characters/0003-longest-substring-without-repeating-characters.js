/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastShown = new Map();
    let maxLen = 0;
    let startAt = 0;

    for (let i = 0; i < s.length; i++) {
        if (lastShown.has(s[i])) {
            startAt = Math.max(lastShown.get(s[i]) + 1, startAt);
        }
        maxLen = Math.max(maxLen, i - startAt + 1)
        lastShown.set(s[i], i);
    }
    return maxLen;
};


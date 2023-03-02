const getClosestIntegers = median => {
    let left;
    let right;

    if (Number.isInteger(median)) {
        left = median - 1;
        right = median + 1;
    } else {
        left = Math.floor(median);
        right = Math.ceil(median);
    }
    return [left, right];
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let tempLongestSlice = s[0];

    const calc = median => {
        let [left, right] = getClosestIntegers(median);

        if (s[left] !== s[right]) return;
        while (s[left] === s[right] && left >= 0 && right <= s.length - 1) {
            left--;
            right++;
        }
        
        const v = s.slice(left + 1, right);
        if (v.length >= tempLongestSlice.length) tempLongestSlice = v;
    }

    let median = 0;
    while (median < s.length) {
        calc(median);
        median += 0.5;
    }

    return tempLongestSlice;
};

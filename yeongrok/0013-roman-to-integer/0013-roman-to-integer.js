const romanIntMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000]
]);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let sum = 0;
  let prev;
  let curr;
  for (let i = s.length - 1; i >= 0; i--) {
    curr = romanIntMap.get(s[i]);
    if (prev > curr) {
      sum -= curr;
    } else {
      prev = curr;
      sum += curr;
    }
  }

  return sum;
};
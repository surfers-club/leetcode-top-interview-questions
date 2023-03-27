/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];

    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                results.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }

        while (nums[i] === nums[i + 1]) i++;
    }

    return results;
};

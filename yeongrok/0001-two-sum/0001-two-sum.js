/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //  ↓  O(n^2) 인 방법
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) return [i, j];
    //     }
    // }

    const originNums = [...nums];
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = i + 1;
    
    while (nums[i] + nums[j] !== target) {
        if (nums[i] + nums[j] < target) {
            i += 1;
            j += 1;
        } else if (nums[i] + nums[j] > target) {
            i -= 1;
        }
    }
    return originNums.reduce((acc, curr, index) => {
        if ([nums[i], nums[j]].includes(curr)) {
            acc.push(index);
        }
        return acc;
    }, []);
}

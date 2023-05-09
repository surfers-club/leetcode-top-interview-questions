/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    var _searchRange = function(nums, target, originStartIndex) {
        const l = nums.length;
        if (l === 0) return [-1, -1];
        if (l === 1) {
            return nums[0] === target
                ? [originStartIndex, originStartIndex]
                : [-1, -1];
        }

        const mid = Math.floor((l-1)/2);
        if (nums[mid] === target) {
            let min = mid;
            let max = mid;

            while (min > 0 && nums[min] === nums[min-1]) min--;
            while (max < l - 1 && nums[max] === nums[max+1]) max++;

            return [originStartIndex + min, originStartIndex + max];
        }

        return nums[mid] > target
            ? _searchRange(nums.slice(0, mid), target, originStartIndex)
            : _searchRange(nums.slice(mid + 1), target, originStartIndex + mid + 1)
    };

    return _searchRange(nums, target, 0);
};
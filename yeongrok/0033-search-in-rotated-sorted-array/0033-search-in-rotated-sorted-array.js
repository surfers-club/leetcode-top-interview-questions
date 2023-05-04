/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    // 정렬
    let start = 0;
    if (nums[0] > nums[nums.length - 1]) {
        while (nums[start] < nums[start+1]) start++;
        start++;
        nums = [...nums.slice(start), ...nums.slice(0, start)];
    }

    // 절반씩 잘라가며 찾기
    var _search = (arr, startIndexOfOrigin) => {
        const { length: l } = arr;
        if (l === 0) return -1;
        if (l === 1) return arr[0] === target ? startIndexOfOrigin : -1;

        const m = Math.floor(l / 2);
        if (arr[m] < target) {
            return _search(arr.slice(m + 1), startIndexOfOrigin + m + 1);
        } else if (arr[m] === target) {
            return startIndexOfOrigin + m;
        } else {
            return _search(arr.slice(0, m), startIndexOfOrigin);
        }
    }

    const v = _search(nums, 0);
    return v === -1 ? -1 : start === 0 ? v : (v + start) % nums.length;
};
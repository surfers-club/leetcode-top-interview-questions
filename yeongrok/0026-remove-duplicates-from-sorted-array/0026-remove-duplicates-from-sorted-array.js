/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const nonDuplicated = [...new Set(nums)];
    const underbarLength = nums.length - nonDuplicated.length;
    nums.splice(0, nonDuplicated.length, ...nonDuplicated);
    nums.splice(
        nonDuplicated.length,
        underbarLength,
        ...Array.from(underbarLength).fill("_")
    );
    return nonDuplicated.length;
};

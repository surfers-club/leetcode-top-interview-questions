/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length <= 2) return 0;

    let left = 0;
    let right = height.length - 1;
    let maxLeftHeight = 0;
    let maxRightHeight = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= maxLeftHeight) {
                maxLeftHeight = height[left];
            } else {
                totalWater += maxLeftHeight - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRightHeight) {
                maxRightHeight = height[right];
            } else {
                totalWater += maxRightHeight - height[right];
            }
            right--;
        }
    }

    return totalWater;
};

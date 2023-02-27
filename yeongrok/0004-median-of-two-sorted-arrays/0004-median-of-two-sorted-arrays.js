/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m;
    let n;
    const mergedArray = [];
    const halfLength = (nums1.length + nums2.length) / 2;
    
    for (i = 0; i <= halfLength; i++) {
        m = nums1.length - 1;
        n = nums2.length - 1;
        if (m >= 0 && n >= 0) {
             if (nums1[nums1.length - 1] >= nums2[nums2.length - 1]) {
                mergedArray.push(nums1.pop());
            } else {
                mergedArray.push(nums2.pop());
            }   
        } else if (m >= 0) {
            mergedArray.push(nums1.pop());
        } else if (n >= 0) {
            mergedArray.push(nums2.pop());
        } else {
            break;
        }
    }

    if (Number.isInteger(halfLength)) {
        return (mergedArray[mergedArray.length - 1] + mergedArray[mergedArray.length - 2]) / 2;
    } else {
        return mergedArray[mergedArray.length - 1];
    }
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sortedNums = Array(nums1.length + nums2.length);

    let index1 = 0;
    let index2 = 0;

    while(index1 < nums1.length || index2 < nums2.length) {
        if(index2 === nums2.length || nums1[index1] <= nums2[index2]) {
            sortedNums[index1 + index2] = nums1[index1];
            index1++;

            continue;
        } 

        if(index1 === nums1.length || nums2[index2] <= nums1[index1]) {
            sortedNums[index1 + index2] = nums2[index2];
            index2++;

            continue;
        }
    }

    const mediumNum = Math.floor(sortedNums.length / 2);

    if(sortedNums.length % 2 == 1) {
        return sortedNums[mediumNum];
    } else {
        return (sortedNums[mediumNum-1] + sortedNums[mediumNum]) / 2.0;
    }
};
function removeDuplicates(nums: number[]): number {
    const sortedArray = [...new Set(nums)];

    for(let i = 0; i < sortedArray.length; i++) {
        nums[i] = sortedArray[i];
    };
    
    return sortedArray.length;
};

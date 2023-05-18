function firstMissingPositive(nums: number[]): number {
    const swapNumber = (pos1:number, pos2:number) => {
        [nums[pos1], nums[pos2]] = [nums[pos2], nums[pos1]]
    }

    for(let i=0; i<nums.length; i++) {
        while(nums[i] >=1 && nums[i] < nums.length && nums[i] !== nums[nums[i]-1]) {
            swapNumber(i, nums[i]-1);
        }
    }

    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== i+1) return i+1
    }
    return nums.length+1; 
};

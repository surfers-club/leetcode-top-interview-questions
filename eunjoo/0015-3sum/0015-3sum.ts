function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a-b);
    let ans = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1] && i > 0) continue;

        let l = i+1;
        let r = nums.length-1;

        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum > 0) {
                r -= 1; 
            } else if(sum < 0) {
                l += 1;
            } else {
                ans.push([nums[i], nums[l], nums[r]]);
                
                l += 1;
                while(nums[l] === nums[l-1]) {
                    l += 1;
                }
                r -= 1;
                while(nums[r] === nums[r+1]) {
                    r -= 1;
                }
            }
        }
    }
    return ans;
};

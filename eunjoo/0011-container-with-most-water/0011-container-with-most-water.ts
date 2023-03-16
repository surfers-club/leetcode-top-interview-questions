function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length-1;

    while(left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);

        maxArea = Math.max(width * minHeight, maxArea);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
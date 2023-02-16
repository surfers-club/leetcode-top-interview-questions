function twoSum(nums: number[], target: number): number[] {
  const map: { [num: number]: number } = {};

  for (let index = 0; index < nums.length; index += 1) {
    const num = nums[index];
    const num2 = target - num;
    const index2 = map[num2];

    if (index2 !== undefined) {
      return [index, index2];
    } else {
      map[num] = index;
    }
  }

  return [];
}

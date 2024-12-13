function threeSum(nums: number[]): number[][] {
    const triplets: number[][] = [];
    nums.sort((a, b) => a - b); // Step 1: Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first element

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase the sum by moving the left pointer to the right
            } else {
                right--; // Decrease the sum by moving the right pointer to the left
            }
        }
    }

    return triplets;
}

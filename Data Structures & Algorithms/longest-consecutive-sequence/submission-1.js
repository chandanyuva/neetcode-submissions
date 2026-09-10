class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);
        let count = 1;
        let max = count;
        for (let i = 0; i < nums.length; i++) {
            count = 1;
            for (let j = i + 1; j < nums.length; j++) {
                // console.log(`${i}:${j} \t${nums[i]} : ${nums[j]}\t ${nums[j]-nums[i]}\t ${count}\t ${max}`)
                if (nums[j] - nums[i] == 1) {
                    count++;
                    i = j;
                } else {
                    continue;
                }
                if (count > max) max = count;
            }
        }
        return max;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let res=0;
        for (let i=0 ; i<nums.length;i++){
            let streak = 0;
            let curr = nums[i];
            if (!numsSet.has(curr-1)){
            while (numsSet.has(curr)){
                streak++
                curr++
            }}
            res = Math.max(res,streak)
        } 
        return res
    }
}

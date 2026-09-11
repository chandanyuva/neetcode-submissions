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
            while (numsSet.has(curr)){
                streak+=1
                curr+=1
            }
            res = Math.max(res,streak)
        } 
        return res
    }
}

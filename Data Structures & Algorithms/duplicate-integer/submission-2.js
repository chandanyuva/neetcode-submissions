class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let HashSet = new Set();
        for(let i=0;i<nums.length;i++){
            if(HashSet.has(nums[i])){
                return true;
            }else{
                HashSet.add(nums[i])
            }
        }
        return false
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let tmp = new Set(nums);
        return tmp.size==nums.length?false:true;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let HM = new Map();
        for (let i=0;i<nums.length;i++){
            if(!HM.has(nums[i])){
                HM.set(nums[i],[]);
            }
            HM.get(nums[i]).push(nums[i]);
        }
        let arr = [...HM.values()];
        arr.sort((a,b)=>-(a.length-b.length));
        let ranked = arr.slice(0,k);
        let res = [];
        ranked.forEach((val)=>{
            res.push(val[0]);
        })
        console.log(res);
        return res;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let HM = new Map();
        for (let i=0;i<strs.length;i++){
            let sortedStr = strs[i].split("").sort().join();
            if(HM.has(sortedStr)){
                HM.get(sortedStr).push(strs[i]);
            }else {
                HM.set(sortedStr,[strs[i]]);
            }
        }
        return [...HM.values()];
    }
}

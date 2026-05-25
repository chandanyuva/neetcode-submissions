class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let storage = {};
        for(const s of strs){
            let count = new Array(26).fill(0);
            for(let c of s){
                count[c.charCodeAt(0)-"a".charCodeAt(0)]+=1
            }
            let key = count.join(",");
            if(!storage[key]){
                storage[key]=[];
            }
            storage[key].push(s);
        }
        return Object.values(storage);
    }
}

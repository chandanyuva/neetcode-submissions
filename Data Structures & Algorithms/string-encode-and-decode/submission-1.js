class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        let dlimiter = "#";
        for (let str of strs) {
            let len = str.length;
            res += len + dlimiter + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while(str[j]!="#"){
                j++
            }
            let length = parseInt(str.slice(i,j))
            res.push(str.slice(j+1,j+1+length))
            i = j+1+length;
        }
        return res;
    }
}

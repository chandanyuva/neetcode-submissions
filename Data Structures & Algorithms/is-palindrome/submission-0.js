class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = "";
        for (let char of s) {
            const code = char.charCodeAt();
            if (
                (code > 47 && code < 58) || // 0-9
                (code > 64 && code < 91) || // A-Z
                (code > 96 && code < 123)
            ) {
                cleanStr += char.toLowerCase();
            }
        }
        // console.log(cleanStr)
        for (let i = 0; i < cleanStr.length; i++) {
            // console.log(cleanStr[i],cleanStr[cleanStr.length-i-1])
            if (cleanStr[i] != cleanStr[cleanStr.length - i - 1]) {
                // console.log(cleanStr[i],cleanStr[cleanStr.length-i-1],i)
                return false;
            }
        }
        return true;
    }
}

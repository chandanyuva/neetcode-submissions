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
        return cleanStr==cleanStr.split("").reverse().join("")
    }
}

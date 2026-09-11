class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let mp = new Map();
        let fi = 0;
        let si = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (!mp.has(numbers[i])) {
                mp.set(numbers[i], target - numbers[i]);
            }
            if (mp.has(mp.get(numbers[i]))) {
                fi = i;
                si = mp.get(mp.get(numbers[i]));
                break
            }
        }
        return [fi, si];
    }
}

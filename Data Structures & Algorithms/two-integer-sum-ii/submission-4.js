class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hm = new Map();
  for (let i = 0 ; i< numbers.length;i++){
    let diff = target - numbers[i];
    if(hm.has(diff)){
      return [hm.get(diff)+1,i+1]
    }
    hm.set(numbers[i],i)
  }
    }
}

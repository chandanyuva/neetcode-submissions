class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = new Map();
        let tMap = new Map();
        for(const item of s){
            if(sMap.has(item)){
                sMap.set(item,sMap.get(item)+1);
            }else{
                sMap.set(item,1);
            }
        }
        for(const item of t){
            // console.log(item)
            if(tMap.has(item)){
                tMap.set(item,tMap.get(item)+1);
            }else{
                tMap.set(item,1);
            }
        }
        // console.log(sMap,tMap);
        return areMapsEqual(sMap,tMap);
    }
}

function areMapsEqual(map1,map2){
    if(map1.size!==map2.size) return false;
    for(const [key,val] of map1){
        if(map2.get(key)!==val) return false
    }
    return true;
}
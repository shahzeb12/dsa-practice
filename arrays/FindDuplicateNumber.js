/**
 * Find duplicate number Aproach
 * 1. Create hashmap (Set)
 * 2. Add FOR loop to itereate nums
 * 3. inside FOR loop we will check if num exists in hashmap, IF yes returns true;
 * 4. Than add num to hashmap 
 * 5. Returns false at the end.
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const hashMap =  new Set();
        
        for (var i = 0; i < nums.length; i++)
        {
            if( hashMap.has(nums[i]) )
            {
                return true;
            }
            hashMap.add(nums[i]);
        }
        return false;

    }
}

const sol = new Solution();

console.log(sol.hasDuplicate([1, 2, 3, 3]));

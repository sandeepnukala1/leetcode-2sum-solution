/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hash = {};
      for(let i = 0; i < nums.length; i++){
        const difference = target - nums[i];
        if(difference in hash){
          return [i, hash[difference]];
        }else{
          hash[nums[i]] = i;
        }
      }
    return [];
};

twoSum([2,7,11,15], 9)
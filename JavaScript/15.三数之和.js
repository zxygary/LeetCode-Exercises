/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    let len = nums.length, result = [];
    for(let i = 0; i < len; i++) {
        if(nums[0] > 0) return result; // 如果排序后第一个元素大于0，那么不可能能凑成三元组

        if(i > 0 && nums[i] === nums[i-1]) // 去重
            continue;
        let left = i + 1; // 左指针初始化
        let right = len - 1;

        while(left < right) {
            if(nums[left] + nums[i] + nums[right] > 0) {
                right--; // 如果大于0，右指针左移，让和小一点
            } else if(nums[left] + nums[i] + nums[right] < 0) {
                left++; // 如果小于0，左指针右移，让和大一点
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[right] === nums[right - 1]) {
                    right--; // 去重
                }
                while(left < right && nums[left] === nums[left + 1]) {
                    left++; // 去重
                }
                // 找到一个符合条件的三元组了，两指针同时收缩
                right--;
                left++;
            }
        }
    }
    return result;
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    // 归并排序
    const merged = []
    let i = 0
    let j = 0
    while(i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        merged.push(nums1[i++])
      } else {
        merged.push(nums2[j++])
      }
    }
    while(i < nums1.length) {
      merged.push(nums1[i++])
    }
    while(j < nums2.length) {
      merged.push(nums2[j++])
    }
  
    const { length } = merged
    return length % 2 === 1
      ? merged[Math.floor(length / 2)]
      : (merged[length / 2] + merged[length / 2 - 1]) / 2
  };
  
  /**
   * 时间复杂度：O(max(m, n))O(max(m,n))
     空间复杂度：O(m + n)O(m+n) 
*/
// @lc code=end


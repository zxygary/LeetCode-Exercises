/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // 负数一律不是回文数
    if (x < 0) return false

    let [rx, k] = [0, x]
 
    while (k > 0) {
        rx = rx * 10 + k % 10 // 反向排序
        k = parseInt(k / 10) // 将低位数
    }

    return rx === x
}

// @lc code=end


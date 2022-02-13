/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    // 思路：从中间开始向两边扩散来判断回文串
    /**
     *
     * @param {*} s
     * @param {*} l 左边界
     * @param {*} r 右边界
     */
    let palindrome = (s, l, r) => {
      while (l >= 0 && r < s.length && s[l] == s[r]) {
        // 向两边展开
        l--;
        r++;
      }
      // 返回以s[l]和s[r]为中心的最长回文串
      return s.substr(l + 1, r - l - 1);
    };
    let res = "";
    for (let i = 0; i < s.length; i++) {
      // 以s[i]为中心的最长回文串
      let s1 = palindrome(s, i, i);
      // 以s[i]和s[i+1]为中心的最长回文串
      let s2 = palindrome(s, i, i + 1);
      res = res.length > s1.length ? res : s1;
      res = res.length > s2.length ? res : s2;
    }
    return res;
  };
// @lc code=end


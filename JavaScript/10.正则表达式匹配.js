/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    const r = new RegExp(p,'g');
    const temp = s.match(r);
    if(!temp) return false;
    for(const str of temp){
        if(str === s) return true;
    }
    return false;
};

// @lc code=end


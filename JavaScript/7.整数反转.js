/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if (x === 0) return 0//零的话直接返回0
    const XArr = String(Math.abs(x)).split('').reverse()//先将数字转为字符串，然后切割成为数组，再反转数组
    let ans = 0// 定义一个变量
    if (x > 0) {// 判断入参的正负值
        ans += Number(XArr.join(''))//正值处理为正
    } else {
        ans -= Number(XArr.join(''))//负值处理为负
    }
    // 不满足限制条件 返回0
    if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
        ans = 0
    }
    return ans
};

// @lc code=end


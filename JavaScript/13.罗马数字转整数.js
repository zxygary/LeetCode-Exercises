/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let [result, str] = [0, s]

    // 单字符映射表
    const singleRoMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    // 双字符映射表
    const doubleRoMap = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }

    // 先处理六种双字符情况 将字符全部替换成对应的数值 并以空格分隔
    for (const k in doubleRoMap) {
        if (str.includes(k)) {
          str = str.replaceAll(k, ` ${doubleRoMap[k]}`).trim()
        }
    }

    // 再把其他单个字符同上处理
    for (const m in singleRoMap) {
        if (str.includes(m)) {
          str = str.replaceAll(m, ` ${singleRoMap[m]}`).trim()
        }
    }

    // 将处理结果分割成数组 调用数组 reduce 方法计算结果
    result = str.split(' ').reduce((total, item) => (total + item * 1), 0)

    return result
};

// @lc code=end


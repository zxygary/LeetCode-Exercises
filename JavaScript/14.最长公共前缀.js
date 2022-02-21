/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
var longestCommonPrefix = function(strs) {
    let resultStack = strs[0];
    for(i=1;i<strs.length;i++){
        for(j=resultStack.length-1;j>=0;j--){
            if(!strs[i].startsWith(resultStack)){
                resultStack = resultStack.slice(0,resultStack.length-1)
            }else{
                j=-1;
            }
        }
    }
    return resultStack||'';
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows===1) return s;
    let res = [];
    for(let i=0;i<numRows;i++){
        res.push([]);
    }
    let row = 0,col=0;
    let mode = 'toBottom';
    const arr = s.split('')
    while(arr.length){
        res[row].push(arr.shift());
        mode = a(mode,row,numRows);
        if(mode==='toBottom'){
            row++;
        }
        if(mode==='top'){
            row--;
            col++;
        }
        
    }
    let r = ''
    for(let i=0;i<res.length;i++){
        r = r+res[i].join('');
    }
    return r;
};
function a(mode,row,n){
    if(mode=='toBottom'&&row===n-1) mode = 'top';
    if(mode==='top'&& row===0) mode = 'toBottom';
    return mode;
}


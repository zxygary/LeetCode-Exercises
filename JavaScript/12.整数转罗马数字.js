/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
    let numToString = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    let result = '';
    let str = Object.keys(numToString);

    for(let i = str.length - 1; i >= 0; i--){
        if(num / Number(str[i]) >= 1){
            result += numToString[str[i]];
            num = num - Number(str[i]);
            i++;
        }
        if(num === 0){
            break;
        }
    }  


    return result;
};

// @lc code=end


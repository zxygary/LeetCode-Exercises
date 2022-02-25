/*
 * @lc app=leetcode.cn id=20 lang=c
 *
 * [20] 有效的括号
 */

// @lc code=start


bool isValid(char * s){
    int length = strlen(s);
    int stk[length+1];
    int top =0;
    if(length % 2 == 1){
        return false;
    }
    for(int i=0;i<length;i++){
        if(s[i]=='('||s[i]=='{'||s[i]=='['){
            stk[top] = s[i];
            top++;
        }
        else if(top!=0 && abs(s[i]-stk[top-1]) <= 2 ){
            top--;
        }else{
            return false;
        }
    }
    return top==0;
}

// @lc code=end


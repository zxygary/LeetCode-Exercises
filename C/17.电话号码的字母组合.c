/*
 * @lc app=leetcode.cn id=17 lang=c
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <string.h>
char numletter[8][5] =  {{'a','b','c'},{'d','e','f'},{'g','h','i'},{'j','k','l'},{'m','n','o'},{'p','q','r','s'},{'t','u','v'},{'w','x','y','z'}};

char** ans;
int anssize;

char* t;
int tsize;

void dfs(char* a,int cur)
{
    if(tsize == strlen(a))
    {
        t[tsize] = 0;//注意此处一定一定记得赋值为0以示字符串结束
        char* temp = malloc(sizeof(char)*(strlen(a)+1));
        memcpy(temp,t,sizeof(char)*(strlen(a)+1));
        ans[anssize++] = temp;
        return;
    }
   for(int j = 0;j <strlen(numletter[a[cur]-'2']);j++)
   { 
        t[tsize++] = numletter[a[cur]-'2'][j];
        dfs(a,cur+1);
        tsize--;
   }
    //    dfs(a,cur,j+1);
}

char ** letterCombinations(char * digits, int* returnSize)
{
    if(strlen(digits) == 0)
    {
        *returnSize = 0;
        return 0;
    }
    ans = malloc(sizeof(char*)*1100000);
    t = malloc(sizeof(char)*(strlen(digits)+1));
    tsize = 0;
    anssize = tsize;
    *returnSize = 0;
    dfs(digits,0);
    *returnSize = anssize;
    return ans; 
}

// @lc code=end


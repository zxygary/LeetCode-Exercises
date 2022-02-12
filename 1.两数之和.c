/*
 * @lc app=leetcode.cn id=1 lang=c
 *
 * [1] 两数之和
 */

// @lc code=start
#include <stdio.h>
int main()
{
    int nums[]={2,7,11,15};
    int target,i,n,m;
    scanf("%d",&target);
    m = sizeof(nums)/sizeof(nums[0]); //这一步相当于是在求数组的长度
    for(i=0;i<m;i++)
        for(n=i+1;n<=m;n++)
            if(nums[i]+nums[n]==target)
            {
                printf("[%d\t%d\n]",i,n);
                m=1;
            }
        if(m!=1)
        printf("不存在任意两个数想加等于%d\n",target);
}
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
// @lc code=end


/*
 * @lc app=leetcode.cn id=18 lang=c
 *
 * [18] 四数之和
 */

// @lc code=start


/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
void backtrack(int* nums, int numsSize, int target, int* returnSize, int** returnColumnSizes, int** returnNums,long sum,int index,int deep,int *stack)
{
    //结束条件
    if (deep == 4)
    {
        if (sum == target)
        {
            returnNums[*returnSize] = (int*)malloc(sizeof(int) * 4);
            memcpy(returnNums[*returnSize], stack, sizeof(int) * 4);
            (*returnColumnSizes)[*returnSize] = 4;
            *returnSize = *returnSize +  1;
        }
        return;
    }
    else
    {
        int i;
        int a = INT_MAX;
        for (i = index + 1; i < numsSize; i++)
        {
            if (a != nums[i])
            {
                stack[deep] = nums[i];
                backtrack(nums, numsSize, target, returnSize, returnColumnSizes, returnNums, sum + nums[i], i, deep + 1, stack);
                a = nums[i];
            }
                
        }
    }

}

int compareFunc(void * a, void *b)
{
    if(*(int*)a > *(int *)b)
    {
        return 1;
    }
    return -1;
}

int** fourSum(int* nums, int numsSize, int target, int* returnSize, int** returnColumnSizes)
{
    qsort(nums, numsSize,sizeof(int),compareFunc);

    //1 <= nums.length <= 200  200的全排列 A200_4 从200个里取4个
    //200^3次方个数
    //回溯法
    int i;

    int** returnNums    = (int**)malloc(sizeof(int*)*8000000);
    *returnColumnSizes  = (int*)malloc(sizeof(int) * 8000000);
    int *stack          = (int*)malloc(sizeof(int) * 4);
    *returnSize         = 0;
    int a = INT_MAX;
    for (i = 0; i < numsSize; i++)
    {
        if (a != nums[i])
        {
            stack[0] = nums[i];
            backtrack(nums, numsSize, target, returnSize, returnColumnSizes, returnNums, nums[i], i, 1, stack);
            a = nums[i];
        }
    }
    return returnNums;
}

// @lc code=end


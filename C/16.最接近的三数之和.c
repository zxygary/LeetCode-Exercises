/*
 * @lc app=leetcode.cn id=16 lang=c
 *
 * [16] 最接近的三数之和
 */

// @lc code=start


int cmp(const void *a,const void *b){
    return *(int*)a - *(int*)b;
}
int threeSumClosest(int* nums, int numsSize, int target){
    qsort(nums,numsSize,sizeof(int),cmp);
    int best = 1e7;
    int i,j,k,sum;
    for(k = 0;k < numsSize;k++){
        if(k > 0 && nums[k] == nums[k - 1])
            continue;
        i = k + 1;
        j = numsSize - 1;
        while(i < j){
            sum = nums[i] + nums[j] + nums[k];
            if(sum == target){
                return target;
            }
            if(abs(sum - target) < abs(best - target))
                best = sum;
            if(sum > target){
                int j0 = j - 1;
                while(i < j0 && nums[j0] == nums[j])
                    --j0;
                j = j0;
            }else{
                int i0 = i + 1;
                while(i0 < j && nums[i0] == nums[i])
                    ++i0;
                i = i0;
            }
        }
    }
    return best;
}

// @lc code=end


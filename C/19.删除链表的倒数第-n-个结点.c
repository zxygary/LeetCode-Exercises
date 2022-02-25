/*
 * @lc app=leetcode.cn id=19 lang=c
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
    struct ListNode* List = head;
    int length = 0;
    while (List) {
        length ++;
        List = List -> next;
    }
    if (length == n) {
        return head -> next;
    }
    int flag = 1;
    List = head;
    while (flag ++ < length - n) {
        List = List -> next;
    }
    if (List -> next && List -> next -> next) {
        List -> next = List -> next -> next;
    } else if (List -> next && !List -> next -> next) {
        List -> next = NULL;
    }
    return head;
}

// @lc code=end


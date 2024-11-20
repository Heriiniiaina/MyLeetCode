# Definition for singly-linked list.
# class ListNode:
#    def __init__(self, val=0, next=None):
#        self.val = val
#        self.next = next
class Solution(object):
    def twoSum(self, nums, target):
        for i in range(0,len(nums)):
            for j in range (i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]
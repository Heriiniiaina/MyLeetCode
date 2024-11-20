class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        a = ""
        l = 0
        for m in s:
            if m not in a:
                a= a + m
                if len(a) > l:
                    l = len(a)
            else:
                index = a.index(m)  
                a = a[index + 1:] + m
        return l  
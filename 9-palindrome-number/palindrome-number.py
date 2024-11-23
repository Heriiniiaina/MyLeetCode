# without changing number to string
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x % 10==0 and x != 0:
            return False
        i = 0
        while x > i:
            i = i * 10 + x % 10
            x//=10
        return x == i or x == i //10 
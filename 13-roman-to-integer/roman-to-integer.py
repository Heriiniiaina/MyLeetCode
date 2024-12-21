class Solution:
    def romanToInt(self, s: str) -> int:
       
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        total = 0
        n = len(s)
        
        for i in range(n):
            current = roman[s[i]]
           
            if i + 1 < n and current < roman[s[i + 1]]:
                total -= current
            else:
                total += current
        
        return total


class Solution:
    def myAtoi(self, s: str) -> int:
        validValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        valid = []
        isNegative = 0
        isPositive = 0
        i = 0
        isEspace = False
        
        while i < len(s) and s[i] not in validValue:
            if s[i] == "-":
                isNegative += 1
            elif s[i] == "+":
                isPositive += 1
            elif s[i] == " ":
                isEspace = True
            else:
                return 0
            if isEspace and (i + 1) < len(s) and s[i + 1] == " " and (s[i] == "+" or s[i] == "-"):
                return 0
            i += 1
        
        if (isNegative >= 1 and isPositive >= 1) or (isPositive > 1 or isNegative > 1):
            return 0
        
        while i < len(s):
            if s[i] in validValue:
                valid.append(s[i])
            else:
                break
            i += 1
        
        if not valid:  
            return 0
        
        numb = -int("".join(valid)) if isNegative % 2 == 1 else int("".join(valid))
        
        if numb > 2147483647:
            return 2147483647
        if numb < -2147483648:
            return -2147483648
        
        return numb

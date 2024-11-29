class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i = len(a) - 1  
        j = len(b) - 1  
        ret = 0       
        result = []     

      
        while i >= 0 or j >= 0 or ret > 0:
            bitA = int(a[i]) if i >= 0 else 0
            bitB = int(b[j]) if j >= 0 else 0

            total = bitA + bitB + ret  
            result.append(str(total % 2))  
            ret = total // 2 

            i -= 1
            j -= 1

        return ''.join(reversed(result))



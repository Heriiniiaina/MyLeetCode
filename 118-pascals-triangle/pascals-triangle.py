

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        
        pascalTriangle = [[1], [1, 1]]
        
        for i in range(2, numRows):
            tab = [0] * (i + 1)
            tab[0] = 1
            tab[i] = 1
            for j in range(1, i):
                tab[j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]
            pascalTriangle.append(tab)
        
        return pascalTriangle

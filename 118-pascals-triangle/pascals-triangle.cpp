class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        if (numRows == 0) return {};
        if (numRows == 1) return {{1}};
        
        vector<vector<int>> pascalTriangle = {{1}, {1, 1}};
        
        for (int i = 2; i < numRows; i++) {
            vector<int> tab(i + 1);
            tab[0] = 1;
            tab[i] = 1;
            for (int j = 1; j < i; j++) {
                tab[j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
            }
            pascalTriangle.push_back(tab);
        }
        
        return pascalTriangle;
    }
};

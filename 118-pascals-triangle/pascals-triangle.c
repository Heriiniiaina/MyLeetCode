#include <stdlib.h>

int** generate(int numRows, int* returnSize, int** returnColumnSizes) {
    *returnSize = numRows;
    *returnColumnSizes = (int*)malloc(numRows * sizeof(int));
    int** pascalTriangle = (int**)malloc(numRows * sizeof(int*));
    
    if (numRows == 0) {
        *returnSize = 0;
        return pascalTriangle;
    }
    
    for (int i = 0; i < numRows; i++) {
        (*returnColumnSizes)[i] = i + 1;
        pascalTriangle[i] = (int*)malloc((i + 1) * sizeof(int));
        pascalTriangle[i][0] = 1;
        pascalTriangle[i][i] = 1;
        for (int j = 1; j < i; j++) {
            pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        }
    }
    
    return pascalTriangle;
}

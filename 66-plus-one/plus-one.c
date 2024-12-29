

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize) {
    
    int* result = (int*)malloc((digitsSize + 1) * sizeof(int));
    if (!result) {
        *returnSize = 0; 
        return NULL;
    }

    int carry = 1; 
    for (int i = digitsSize - 1; i >= 0; i--) {
        int sum = digits[i] + carry;
        result[i + 1] = sum % 10; 
        carry = sum / 10;         
    }

 
    if (carry > 0) {
        result[0] = carry;
        *returnSize = digitsSize + 1;
    } else {
       
        for (int i = 0; i < digitsSize; i++) {
            result[i] = result[i + 1];
        }
        *returnSize = digitsSize;
    }

    return result;
}
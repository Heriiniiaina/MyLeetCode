bool isValid(char* s) {
    char* test = (char*)malloc(strlen(s) * sizeof(char)); 
    int top = -1; 

    char correct[128] = {0}; 
    correct[')'] = '(';
    correct['}'] = '{';
    correct[']'] = '[';

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        if (c == '(' || c == '[' || c == '{') {
            test[++top] = c; 
        } else if (c == ')' || c == '}' || c == ']') {
            if (top == -1 || test[top--] != correct[c]) { 
                free(test);
                return false;
            }
        }
    }

    bool result = (top == -1); 
    free(test);
    return result;
}
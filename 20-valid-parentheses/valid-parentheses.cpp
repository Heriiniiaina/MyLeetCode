class Solution {
public:
    bool isValid(string s) {
        stack<char> test;
        unordered_map<char, char> correct = {
            {')', '('},
            {'}', '{'},
            {']', '['}
        };

        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                test.push(c);
            } else if (c == ')' || c == '}' || c == ']') {
                if (test.empty() || test.top() != correct[c]) {
                    return false;
                }
                test.pop();
            }
        }
        return test.empty();
    }
};
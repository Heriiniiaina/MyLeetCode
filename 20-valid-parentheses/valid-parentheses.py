class Solution:
    def isValid(self, s: str) -> bool:
        test = []
        correct = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for char in s:
            if char in "({[":
                test.append(char)
            elif char in ")}]":
                if not test or test.pop() != correct[char]:
                    return False

        return len(test) == 0

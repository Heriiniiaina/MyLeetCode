#include <stdio.h>
#include <string.h>

int getValue(char c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0; 
    }
}

int romanToInt(char* s) {
    int v = 0;
    int length = strlen(s);
    for (int i = 0; i < length; i++) {
        int c = getValue(s[i]);
        int n = (i + 1 < length) ? getValue(s[i + 1]) : 0;
        if (c < n) {
            v -= c;
        } else {
            v += c;
        }
    }
    return v;
}


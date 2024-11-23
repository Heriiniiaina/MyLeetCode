// Change the number to string
function isPalindrome(x: number): boolean {
    return x.toString() === x.toString().split("").reverse().join("")
};
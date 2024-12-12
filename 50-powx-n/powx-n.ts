function myPow(x: number, n: number): number {
    if (n === 0) return 1;

    let isPositive = n > 0; 
    n = Math.abs(n);

    let result = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            result *= x; 
        }
        x *= x; 
        n = Math.floor(n / 2); 
    }

    return isPositive ? result : 1 / result; 
}
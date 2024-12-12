function myPow(x: number, n: number): number {
    let pow:number = 1
    let isPositive:boolean = true
    if(n<0){
        n = Math.abs(n)
        isPositive = false
    }
   
    return isPositive ? Math.pow(x,n) : (1/Math.pow(x,n))
};
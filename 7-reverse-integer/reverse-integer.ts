function reverse(x: number): number {
    let a:string[] = x.toString().split("")
    let i = 0
    let j = 0
    while (i < a.length /2){
        if(a[i]!="-"){
            const tmp = a[a.length - 1 - j]
            a[a.length -1 -j] = a[i]
            a[i] = tmp
            j++
        }
            i++
    }
    
    const num:number = Number(a.join(""));
    return (num > -(2**31) && num <= (2**31) - 1) ? num : 0;

};
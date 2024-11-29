function addBinary(a: string, b: string): string {
    let i:number = a.length - 1
    let j:number = b.length - 1
    let ret:number = 0
    let sum:string = ""
    while(i>=0 || j>=0 || ret >0 ){
        const bita = i>=0 ? Number(a[i]) : 0
        const bitb = j>=0 ? Number(b[j]) : 0
        const res = bita + bitb + ret
        sum = (res%2).toString() + sum
        ret = Math.floor(res / 2)
        i--
        j--
    }
    return sum
};
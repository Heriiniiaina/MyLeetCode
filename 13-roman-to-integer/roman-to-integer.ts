function getValue(k:string,r:object): number {
    if(k in r)
        return r[k]
    return undefined
}
function romanToInt(s: string): number {
    const roman:object ={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    } 
    let v:number = 0
    for (let i=0;i<s.length;i++){
        const c = getValue(s[i],roman)
        const n = i + 1 < s.length ? getValue(s[i+1],roman) : 0
        if(c < n)
            v-= c
        else 
            v+=c
    }
    return v
};
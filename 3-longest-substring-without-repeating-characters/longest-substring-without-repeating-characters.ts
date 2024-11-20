function lengthOfLongestSubstring(s: string): number {
    let a:string = ""
    let len:number = 0
    for(const c of s){
        if(!a.includes(c)){
            a += c
            if (a.length > len )
                len = a.length
        }
        else {
            const index:number = a.indexOf(c)
            a = a.slice(index+1) + c
        }

    }
    return len
};
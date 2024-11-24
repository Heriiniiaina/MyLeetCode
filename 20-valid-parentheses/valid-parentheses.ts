function isValid(s: string): boolean {
    const test: string[] = []
    const correct:{[key:string]:string}={
        ")":"(",
        "}":"{",
        "]":"["
    }

    for (let c of s){
        if(c==="(" || c==="[" || c==="{")
            test.push(c)
        else if  (c === ')' || c === '}' || c === ']') {
            if(test.length==0 || test.pop() !=correct[c])
            return false
        }
    }
    return test.length===0
};
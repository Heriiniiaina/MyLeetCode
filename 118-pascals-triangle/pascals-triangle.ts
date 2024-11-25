function generate(numRows: number): number[][] {
    if(numRows===0)
        return []
    if(numRows===1)
        return [[1]]
   
    let pascalTriangle:number[][] = [
        [1],[1,1]
       
    ]
    for(let i=2;i<numRows;i++){
        let tab:number[] =[]
        tab[0] = 1
        tab[i] = 1
       for(let j=1;j<i;j++){
         tab[j] = pascalTriangle[i-1][j-1]+pascalTriangle[i-1][j]
       }
       pascalTriangle.push(tab)
    }
    return pascalTriangle
};
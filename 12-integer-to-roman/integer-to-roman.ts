interface NumberType{
    mil:number,
    cent:number,
    diz:number,
    unit:number
}
function decompose(n:number):NumberType{
    const mil = Math.floor(n/1000)
    const cent = Math.floor((n%1000)/100)
    const diz = Math.floor((n%100)/10)
    const unit = n%10
    return {mil,cent,diz,unit}
}
function intToRoman(num: number): string {
    const symbol: {[key: string]:number}={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    const decomposedNumber:NumberType = decompose(num)
    let roman:string = ""
    for(let i=0;i<decomposedNumber.mil;i++){
        roman+="M"
    }
    //Centaine
    if(decomposedNumber.cent===9)
        roman+="CM"
    else if (decomposedNumber.cent>=5)
        roman+= "D" + "C".repeat(decomposedNumber.cent - 5)
    else if (decomposedNumber.cent ==4)
        roman+= "CD"
    else roman+="C".repeat(decomposedNumber.cent)

    //dizaine
    if(decomposedNumber.diz===9)
    roman+="XC"
    else if (decomposedNumber.diz>=5)
        roman+="L" +"X".repeat(decomposedNumber.diz - 5)
    else if (decomposedNumber.diz ===4)
    roman+="XL"
    else roman+= "X".repeat(decomposedNumber.diz)

    //Unité
    if(decomposedNumber.unit===9)
        roman+="IX"
    else if(decomposedNumber.unit >=5)
        roman+="V" + "I".repeat(decomposedNumber.unit -5 )
    else if(decomposedNumber.unit ===4)
        roman+="IV"
    else roman +="I".repeat(decomposedNumber.unit)
    return roman 
};
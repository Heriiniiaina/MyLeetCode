function myAtoi(s: string): number {
    let validValue: string[]= ["0","1","2","3","4","5","6","7","8","9"]
    let valid: string[] = []
    let isNegative:number = 0;
    let isPositive:number = 0
    let i =0
    let isEspace:boolean =false 
    while(!validValue.includes(s[i])){
        if(s[i]=="-")
            isNegative++
        else if(s[i]=="+")
            isPositive++
        else if(s[i]==' '){
            isEspace = true
        }
        else
        return 0
        if(isEspace==true && (i+1) <s.length && (s[i+1]==" ") && (s[i]=="+" || s[i]=="-"))
        return 0
        i++
    }
    if((isNegative >=1 && isPositive >=1) || (isPositive >1 || isNegative >1))
        return 0
    while(i < s.length){
        if(validValue.includes(s[i])){
            valid.push(s[i])
        } else{
            break
        }
        i++
    }
    let numb:number = isNegative % 2==0 ? Number(valid.join("")) : -Number(valid.join(""))
    if(numb>2147483647){
        return 2147483647
    }
     if(numb<-2147483648){
        return -2147483648
    }
    return numb
};
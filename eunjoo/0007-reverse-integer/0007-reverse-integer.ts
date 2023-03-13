function reverse(x: number): number {    
    const reversedStr = Math.abs(x).toString().split("").reverse().join("")
    const num = x < 0 ? -Number(reversedStr) : Number(reversedStr);

    if(num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) return 0;
    return num;
};
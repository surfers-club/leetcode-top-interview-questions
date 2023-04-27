function divide(dividend: number, divisor: number): number {
   const quotient = dividend / divisor; 
    
   if(quotient > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
   if(quotient < -Math.pow(2, 31)) return -Math.pow(2, 31);

   return quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
};

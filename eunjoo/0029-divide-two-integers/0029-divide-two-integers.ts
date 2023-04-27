function divide(dividend: number, divisor: number): number {
   if(dividend / divisor > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

   return Math.trunc(dividend / divisor);
};

function convert(s: string, numRows: number): string {
   if(numRows === 1) return s;

   const midRowsLength = numRows - 2;
   const mainDiff = midRowsLength + numRows;

   let ans = '';

   for(let row = 0; row < numRows; row++) {
        const midRowDiff = 2 * (numRows-row-1);
        const isMidRow = row !== 0 && row !== numRows - 1;

       for(let index = row; index < s.length; index += mainDiff) {
            ans += s[index];
            const midRowIndex = index + midRowDiff;

            if(midRowIndex < s.length && isMidRow ){
               ans += s[midRowIndex]
           }
       }
   }

   return ans;
};
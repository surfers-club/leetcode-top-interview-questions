/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;

    const strDividend = dividend.toString();
    const strDivisor = divisor.toString();
    const isNegative = strDividend.startsWith("-") !== strDivisor.startsWith("-");

    dividend = parseInt(strDividend.replace("-", ""));
    divisor = parseInt(strDivisor.replace("-", ""));

    if (dividend < divisor) return 0;

    let strQuotient = "";
    let remainder = 0;

    const getRemainder = (dividend, divisor) => {
        let q = 0;
        while (dividend >= divisor) {
            dividend -= divisor;
            q++;
        }
        strQuotient += q;
        return dividend;
    }    
    for (let i = 0; i < strDividend.length; i++) {
        remainder = getRemainder(parseInt(`${remainder}${strDividend[i]}`), divisor)
    }


    let quotient = parseInt(isNegative ? `-${strQuotient}` : strQuotient);
    if (quotient > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (quotient < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else {
        return quotient;
    }
};

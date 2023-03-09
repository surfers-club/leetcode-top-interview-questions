function myAtoi(s: string): number {
    let ans = 0;
    let idx = 0;
    let flag = 1;
    const smallestNum = -2147483648;
    const biggestNum = 2147483647;

    while (s[idx] === ' ') idx++;
    
    if(s[idx] === '-' || s[idx] === '+') {
        flag = s[idx++] === '-' ? -1 : 1;
    }

    while(s[idx] >= '0' && s[idx] <= '9') {
        ans = ans * 10 + Number(s[idx]);

        if(ans * flag < smallestNum) return smallestNum;
        if(ans * flag > biggestNum) return biggestNum;

        idx++;
    }

    return ans * flag;
};
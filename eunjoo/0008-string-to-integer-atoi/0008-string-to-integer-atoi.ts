function myAtoi(s: string): number {
    const num = Number.parseInt(s);

    if(num < -2147483648) return -2147483648;
    if(num > 2147483647) return 2147483647;

    return num || 0;
};
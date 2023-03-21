const romanMap = { 
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function romanToInt(s: string): number {
    let sum = 0;

    for(let i = 0; i < s.length; i++) {
        const currItem = romanMap[s[i]]
        const nextItem = romanMap[s[i+1]];

        if(currItem < nextItem) {
            sum += (nextItem - currItem);
            i++;
        } else {
            sum += currItem;
        }
    }

    return sum;
};
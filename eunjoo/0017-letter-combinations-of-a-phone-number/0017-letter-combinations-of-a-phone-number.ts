function letterCombinations(digits: string): string[] {
    if(digits === '') return [];

    const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const ans = [];

    const backtrack = (idx, str) => {
        if(idx === digits.length) {
            ans.push(str);
        } else {
            letterMap[digits[idx]].split("").forEach((letter) => {
                backtrack(idx+1, str+letter);
            }) 
        }
    }
    backtrack(0, "");
    return ans;
};